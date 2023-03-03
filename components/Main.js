import Image from 'next/image'
import useMatchMedia from 'react-use-match-media'

import Skills from './Skills.js'

import HeroMobile from '../public/images/image-hero-mobile.png'

const Main = () => {
  const isMobileView = useMatchMedia('(max-width: 640px)')

  return (
    <main>
      <div className="mx-4 sm:mx-[10%] mt-10 sm:mt-24 md:mt-44 mb-16 sm:mb-48 md:mb-56 z-50">
        <div className="w-full sm:w-[50%] z-50">
          <div className="text-headingL lg:text-headingXL font-extrabold z-50">
            Maximize skill, minimize budget
          </div>
          <div className="text-bodyS lg:text-bodyM text-grey mt-7 mb-10 pr-3 z-50">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </div>
        </div>
        <button className="button bg-gradient-to-b from-orange to-red hover:opacity-50 font-bold text-[#FFF] lg:text-bodyM text-bodyS py-3.5 px-9 lg:px-8 rounded-[28px]">
          Get Started
        </button>
        {isMobileView && (
          <Image
            className="z-0 mt-12 mb-16 object-contain w-full"
            src={HeroMobile}
          />
        )}
      </div>
      <Skills />
    </main>
  )
}

export default Main
