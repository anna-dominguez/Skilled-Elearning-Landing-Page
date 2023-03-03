import Image from 'next/image'

import useMatchMedia from 'react-use-match-media'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'

import HeroDesktop from '../public/images/image-hero-desktop.png'
import HeroTablet from '../public/images/image-hero-tablet.png'

const Home = () => {
  const isTabletView = useMatchMedia('(max-width: 1024px)')
  const isMobileView = useMatchMedia('(max-width: 640px)')

  return (
    <div className="relative z-0">
      {!isMobileView && (
        <Image
          className="absolute -right-[300px] -top-[120px] max-md:-top-[50px] max-md:-right-[250px] max-md:w-[640px] max-md:h-[640px] w-[80%] z-0"
          src={!isTabletView ? HeroDesktop : HeroTablet}
        />
      )}
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
