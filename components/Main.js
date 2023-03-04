import Image from 'next/image'

import Skills from './Skills.js'

import HeroMobile from '../public/images/image-hero-mobile.png'

const Main = () => (
  <main>
    <div className="mx-4 md:mx-[5%] lg:mx-[12%] mt-10 md:mt-24 lg:mt-44 mb-16 md:mb-48 lg:mb-56 z-50">
      <div className="w-full lg:w-[50%] md:w-[60%] z-50">
        <div className="text-headingL lg:text-headingXL font-extrabold z-50">
          Maximize skill, minimize budget
        </div>
        <div className="text-bodyS lg:text-bodyM text-grey mt-7 mb-10 w-[100%] md:w-[90%] lg:w-[85%] z-50">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </div>
      </div>
      <button className="button bg-gradient-to-b from-orange to-red hover:opacity-50 font-bold text-[#FFF] lg:text-bodyM text-bodyS py-3.5 px-9 lg:px-8 rounded-[28px]">
        Get Started
      </button>
      <Image
        className="z-0 md:hidden mt-12 mb-16 object-contain w-full"
        src={HeroMobile}
      />
    </div>
    <Skills />
  </main>
)

export default Main
