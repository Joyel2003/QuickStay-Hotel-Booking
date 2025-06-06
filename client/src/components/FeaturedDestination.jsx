import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

const FeaturedDestination = () => {
  const title = 'Featured Destination';
  const subTitle = 'Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>


      <Title title={title} subTitle={subTitle} />

      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room , index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestination
