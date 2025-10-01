import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel '

import Card from './components/Card'
import Footer from './components/Footer'



import CenterHero from './components/CenterHero'
import NationalGallery from './components/NationalGallery'
import InterationalGallery from './components/InternationalGallery'
import Featurs from './components/Featurs'
import TextGallery from './components/TextGallery'
import GalleryTabs from './components/GalleryTabs'
import TextGallery1 from './components/TextGallery1'
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24 lg:pt-20">
        <Carousel />
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <Card />
          <NationalGallery />
          <CenterHero />
          <InterationalGallery />
          <Featurs />
          <TextGallery />
          <GalleryTabs />
          <TextGallery1 />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
