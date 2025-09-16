import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
      <div className="font-[font1]  mt-72 lg:mt-0 pt-5 text-center">
        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
          CREATING
        </div>
        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
          IMPACT
          <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden ">
            <Video />
          </div>
          INSPIRING
        </div>
        <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
          THE WORLD
        </div>
      </div>
    );
}

export default HomeHeroText