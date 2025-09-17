import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Suspense, lazy } from 'react'

// Lazy load the heavy ProjectCard for performance
const ProjectCard = lazy(() => import('../components/projects/ProjectCard'))

const Projects = () => {
  // Local images should be placed in `public/images/`.
  // See `public/images/README.md` for original source URLs.
  const projects = [
    {
      image1: '/images/chenab-bridge.jpg',
      image2: '/images/india-proxy.jpg',
    },
    {
      image1: '/images/newsbytes-article.jpg',
      image2: '/images/chandrayaan.jpg',
    },
    {
      image1: '/images/medium-feature.jpg',
      image2: '/images/pinimg-original.jpg',
    },
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: { amount: 0.4 },
      scrollTrigger: { trigger: '.lol', start: 'top 100%', end: 'top -150%', scrub: true },
    })
  })

  return (
    <div className="lg:p-4 p-2 mb-[100vh]">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">Projects</h2>
      </div>
      <div className="-lg:mt-20 lol">
        <Suspense fallback={<div>Loading projects…</div>}>
          {projects.map(function (elem, idx) {
            return (
              <div key={idx} className="hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            )
          })}
        </Suspense>
      </div>
    </div>
  )
}

export default Projects