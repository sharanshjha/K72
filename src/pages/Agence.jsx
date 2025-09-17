import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

/**
 * Agence - page that pins an image and swaps it based on scroll progress.
 * The image list is kept in the component to avoid external mutation.
 */
const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    // Local images should be placed in `public/images/` and named accordingly.
    '/images/figure-1.jpg',
    '/images/figure-2.jpg',
    '/images/figure-3.jpg',
    '/images/tribune-high.jpg',
    '/images/mukesh-ambani.jpg',
    '/images/figure-6.jpg',
    '/images/kailash-satyarthi.jpg',
    '/images/figure-8.jpg',
    '/images/amartya-sen.jpg',
  ]

  useGSAP(() => {
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
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          if (imageRef.current) imageRef.current.src = imageArray[imageIndex]
        },
      },
    })
  })

  // Rationale: swapping the `src` onScroll avoids creating many pinned elements
  // and keeps the DOM lightweight; images are loaded from `public/images/`.

  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            loading="lazy"
            className="h-full object-cover w-full"
            src="/images/pinimg-236.jpg"
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
              India’s spirit fuels innovation. We stay rooted in humility and say no to arrogance. A nation, like a brand, is alive — with values, diversity, and a story of resilience.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen"></div>
    </div>
  )
}

export default Agence