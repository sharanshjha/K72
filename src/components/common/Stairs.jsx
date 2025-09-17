import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Stairs - entry animation component that shows a staggered 'stair' mask
 * then reveals the page. Uses refs to avoid string-based selectors and
 * to minimize DOM queries and re-renders.
 */
const Stairs = ({ children }) => {
    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const stairsRefs = useRef([])
    const pageRef = useRef(null)

    // create array refs for stairs to use with GSAP without querying classes
    const setStair = (el, idx) => {
        stairsRefs.current[idx] = el
    }

    useGSAP(
        () => {
            const tl = gsap.timeline()

            // Make the parent visible
            tl.set(stairParentRef.current, { display: 'block' })

            // Animate each stair using the refs array
            tl.from(stairsRefs.current, {
                height: 0,
                stagger: { amount: -0.2 },
            })

            tl.to(stairsRefs.current, {
                y: '100%',
                stagger: { amount: -0.25 },
            })

            // hide the mask and reveal the page
            tl.set(stairParentRef.current, { display: 'none' })
            tl.to(stairsRefs.current, { y: '0%' })

            // subtle reveal for the page content to avoid layout jumps
            gsap.from(pageRef.current, { opacity: 0, delay: 1.3, scale: 1.2 })
        },
        [currentPath]
    )

    return (
        <div>
            <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0 pointer-events-none">
                <div className="h-full w-full flex">
                    <div ref={(el) => setStair(el, 0)} className="h-full w-1/5 bg-black" />
                    <div ref={(el) => setStair(el, 1)} className="h-full w-1/5 bg-black" />
                    <div ref={(el) => setStair(el, 2)} className="h-full w-1/5 bg-black" />
                    <div ref={(el) => setStair(el, 3)} className="h-full w-1/5 bg-black" />
                    <div ref={(el) => setStair(el, 4)} className="h-full w-1/5 bg-black" />
                </div>
            </div>
            <div ref={pageRef}>{children}</div>
        </div>
    )
}

export default Stairs

Stairs.propTypes = {
    children: PropTypes.node,
}