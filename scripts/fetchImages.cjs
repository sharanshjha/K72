const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

const readmePath = path.join(__dirname, '..', 'public', 'images', 'README.md')
const outDir = path.join(__dirname, '..', 'public', 'images')

if (!fs.existsSync(readmePath)) {
  console.error('README.md with image list not found at', readmePath)
  process.exit(1)
}

const content = fs.readFileSync(readmePath, 'utf8')

// Look for filename lines followed by URL lines. We support either:
// - filename on its own line then a URL on the next line
// - bullet lines like "- name.jpg" followed by the URL line
const lines = content.split(/\r?\n/)
const items = []
for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trim()
  // strip leading bullet markers
  line = line.replace(/^[-*]\s*/, '')
  const fnameMatch = line.match(/^([\w\-\._]+\.(jpg|jpeg|png|webp|mp4))$/i)
  if (fnameMatch) {
    let j = i + 1
    // find next line that contains an http(s) URL
    while (j < lines.length && !/^https?:\/\//i.test(lines[j].trim())) j++
    if (j < lines.length) {
      const url = lines[j].trim()
      items.push({ filename: fnameMatch[1], url })
    }
  }
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const request = client.get(url, (res) => {
      if (res.statusCode >= 400) {
        return reject(new Error(`Request failed. Status code: ${res.statusCode}`))
      }
      const file = fs.createWriteStream(dest)
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
      file.on('error', (err) => reject(err))
    })
    request.on('error', (err) => reject(err))
  })
}

async function main() {
  console.log(`Found ${items.length} images to download.`)
  for (const item of items) {
    const dest = path.join(outDir, item.filename)
    if (fs.existsSync(dest)) {
      console.log(`Skipping (exists): ${item.filename}`)
      continue
    }
    try {
      console.log(`Downloading ${item.url} -> ${item.filename}`)
      await download(item.url, dest)
      console.log(`Saved: ${dest}`)
    } catch (err) {
      console.error(`Failed to download ${item.url}:`, err.message)
    }
  }
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
