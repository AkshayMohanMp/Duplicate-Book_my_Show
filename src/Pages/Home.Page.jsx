import React, { useState } from 'react'
import Defaultlayout from '../layout/Default.layout'
//  Components
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component'
import PostSlider from '../Components/PosterSlider/PostSlider.Component'
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Component'


const HomePage = () => {
  const [recommendedMovies, SetrecommendedMovies]=useState([])
  const [premierMovies, SetpremierMovies]=useState([])
  const [onlineMovies, SetonlineMovies]=useState([])
  return (
    <>
      <HeroCarousel/>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>The Best of Entertainment</h1>
        <EntertainmentCardSlider/>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PostSlider
          title ="Recommended Movies"
          subtitle ="List of Recommended Movie"
          poster ={recommendedMovies}
          isDark={false}
        />

      </div>


      <div className='bg-premier-800 py-12'>
        <div className=' container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className=' hidden md:flex'>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-dsvnm&psig=AOvVaw2jid624lmJlSWUChr23yrD&ust=1716127214835000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCxxpmul4YDFQAAAAAdAAAAABAE" 
            alt="VISA" className=' w-full h-full'/>
          </div>
          <PostSlider
          title ="Premiers"
          subtitle ="Brand new release every Friday"
          poster ={premierMovies}
          isDark={true}
        />
        </div>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PostSlider
          title ="Online Streaming Events"
          subtitle ="List of Recommended Movie"
          poster ={onlineMovies}
          isDark={false}
        />

      </div>


    </>
  )
}

export default Defaultlayout(HomePage);
