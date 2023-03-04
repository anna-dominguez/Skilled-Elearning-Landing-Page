import Image from 'next/image'

import useMatchMedia from 'react-use-match-media'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'

import HeroDesktop from '../public/images/image-hero-desktop.png'
import HeroTablet from '../public/images/image-hero-tablet.png'

const Home = () => (
  <div className="relative z-0">
    <Image
      className="absolute max-lg:hidden -right-80 -top-32 w-[70%] z-0"
      src={HeroDesktop}
    />
    <Image
      className="absolute lg:hidden max-md:hidden -right-72 -top-20 z-0"
      src={HeroTablet}
    />
    <Header />
    <Main />
    <Footer />
  </div>
)

export default Home
