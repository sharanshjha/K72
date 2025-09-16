import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F_nLbFmr5xy_YL8Q7CLRr3x381EkYneqsg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYEI5nU2R_FOfpmEBKHJW7TXrT7PKTdmtAw&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rEJMpSZZZkyLPO2KT1VyZMMDdcJPEmNQrQ&s",
    "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWQxOWI0OGYwLWM0OTktMTFlZi1iN2U1LTZkYzM5MWFjZTdiZS5qcGc=",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/mukesh-ambani-photo-bandeep-singh-120259169-1x1.jpg?VersionId=xRv.htWJ8qFHeD8dQ7OzQZ079Z45qINf",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7BZPm1a4FCeieHYft7ttqk7uOkrAzrMCHA&s",
    "https://worth.com/wp-content/uploads/2024/11/Kailash-Satyarthi.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUyP-DiORv7NUQk9WIsYrJYywaMf02tVaTQ&s",
    "https://cdn.britannica.com/71/124271-004-04347FCF/Amartya-Sen-2007.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rEJMpSZZZkyLPO2KT1VyZMMDdcJPEmNQrQ&s",
    "https://worth.com/wp-content/uploads/2024/11/Kailash-Satyarthi.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/mukesh-ambani-photo-bandeep-singh-120259169-1x1.jpg?VersionId=xRv.htWJ8qFHeD8dQ7OzQZ079Z45qINf",
  ];

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className="parent">
      <div id="page1" className="py-1 ">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="https://i.pinimg.com/236x/7b/86/bd/7b86bd2045e369e5b9ac105fe3cb6045.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Great <br />
              India
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl text-xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              India’s spirit fuels innovation. We stay rooted in humility and
              say no to arrogance. A nation, like a brand, is alive — with
              values, diversity, and a story of resilience. If we forget this,
              progress may look shiny in the short term, but it loses its soul.
              That’s why K72 is committed to perspective — to showcase India’s
              journey of building influence that lasts.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen"></div>
    </div>
  );
}

export default Agence