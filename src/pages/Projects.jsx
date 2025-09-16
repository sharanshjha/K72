import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [
    {
      image1:
        "https://www.railway-technology.com/wp-content/uploads/sites/13/2020/06/Image-1-Chenab-Bridge.jpg",
      image2:
        "https://lh6.googleusercontent.com/proxy/VslUqyT-peddWFTLk7SqyR_kJC3towRCWde1P1-XHvt4e4ZaNEVb5pH3j2XDiTWtRDOryDvEzg",
    },
    {
      image1: "https://i.cdn.newsbytesapp.com/images/l64920250611112612.jpeg",
      image2:
        "https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Chandrayaan%203--94b160.jpg",
    },
    {
      image1: "https://miro.medium.com/1*nouIPjeyS-HVsQ6U18zMXQ.jpeg",
      image2:
        "https://i.pinimg.com/originals/36/c8/21/36c82157786a6d305152a9b8ea24a85b.jpg",
    },
  ];


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects