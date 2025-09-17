import PropTypes from 'prop-types'

/**
 * ProjectCard - displays two images side-by-side with a hover CTA.
 * Images are marked `loading="lazy"` to improve initial page performance.
 */
const ProjectCard = ({ image1, image2 }) => {
    return (
        <>
            <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
                <img loading="lazy" className="h-full w-full object-cover" src={image1} alt="Project view 1" />
                <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
                    <h2 className="uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full">View project</h2>
                </div>
            </div>
            <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
                <img loading="lazy" className="h-full w-full object-cover" src={image2} alt="Project view 2" />
                <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
                    <h2 className="uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full">View project</h2>
                </div>
            </div>
        </>
    )
}

ProjectCard.propTypes = {
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
}

export default ProjectCard