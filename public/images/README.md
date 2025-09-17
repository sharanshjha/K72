This folder is intended to store images used by the project.

I replaced remote image URLs in the code with local paths under `/images/`.
Please download the original images (listed below) and save them in this folder
using the filenames shown. This avoids hotlinking and improves performance.

Files and original sources:

- chenab-bridge.jpg
  https://www.railway-technology.com/wp-content/uploads/sites/13/2020/06/Image-1-Chenab-Bridge.jpg

- india-proxy.jpg
  https://lh6.googleusercontent.com/proxy/VslUqyT-peddWFTLk7SqyR_kJC3towRCWde1P1-XHvt4e4ZaNEVb5pH3j2XDiTWtRDOryDvEzg

- newsbytes-article.jpg
  https://i.cdn.newsbytesapp.com/images/l64920250611112612.jpeg

- chandrayaan.jpg
  https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Chandrayaan%203--94b160.jpg

- medium-feature.jpg
  https://miro.medium.com/1*nouIPjeyS-HVsQ6U18zMXQ.jpeg

- pinimg-original.jpg
  https://i.pinimg.com/originals/36/c8/21/36c82157786a6d305152a9b8ea24a85b.jpg

- pinimg-236.jpg
  https://i.pinimg.com/236x/7b/86/bd/7b86bd2045e369e5b9ac105fe3cb6045.jpg

- figure-1.jpg
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F_nLbFmr5xy_YL8Q7CLRr3x381EkYneqsg&s

- figure-2.jpg
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYEI5nU2R_FOfpmEBKHJW7TXrT7PKTdmtAw&s

- figure-3.jpg
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rEJMpSZZZkyLPO2KT1VyZMMDdcJPEmNQrQ&s

- tribune-high.jpg
  https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWQxOWI0OGYwLWM0OTktMTFlZi1iN2U1LTZkYzM5MWFjZTdiZS5qcGc=

- mukesh-ambani.jpg
  https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/mukesh-ambani-photo-bandeep-singh-120259169-1x1.jpg?VersionId=xRv.htWJ8qFHeD8dQ7OzQZ079Z45qINf

- figure-6.jpg
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7BZPm1a4FCeieHYft7ttqk7uOkrAzrMCHA&s

- kailash-satyarthi.jpg
  https://worth.com/wp-content/uploads/2024/11/Kailash-Satyarthi.jpg

- figure-8.jpg
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUyP-DiORv7NUQk9WIsYrJYywaMf02tVaTQ&s

- amartya-sen.jpg
  https://cdn.britannica.com/71/124271-004-04347FCF/Amartya-Sen-2007.jpg

Notes:
- When you add images, ensure filenames exactly match those in the README.
- For large images you may want to create optimized/resized variants (e.g. using
  `squoosh` or `imagemin`) and update paths to point to the optimized versions.
- After adding images, run the dev server and verify pages load correctly.

Usage: automatic download helper
--------------------------------
You can automatically download the original images listed above using the
included script `scripts/fetchImages.js`. Node.js (v14+) is required.

Run:

```bash
npm run fetch-images
```

Or directly with node:

```bash
node scripts/fetchImages.js
```

The script will skip files that already exist in `public/images/`.
