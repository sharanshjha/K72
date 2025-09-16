import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className="font-[font2] flex items-center justify-center gap-2 ">
      <p className="absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 is a platform that celebrates India’s boldest achievements — from
        space missions to digital revolutions. We showcase the projects that
        define tomorrow, the innovations that inspire today, and the vision that
        drives the future. Without filter, without compromise, we present
        India’s story to the world.
      </p>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase">
        <Link className="text-[6vw] lg:mt-6" to="/projects">
          Achievements
        </Link>
      </div>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase">
        <Link className="text-[6vw] lg:mt-6" to="/agence">
          Trailblazers
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText