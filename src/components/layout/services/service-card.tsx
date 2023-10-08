import Image from 'next/image'
import React from 'react'


const ServiceCard = () => {

  return (
    <>
    <div className='flex items-center justify-center flex-row gap-4 rounded-xl bg-gradient-to-r from-[#F1C40F] to-[#e8d06e] w-[200px] h-[90px]'>
        <div className='relative w-full aspect-square  right-[10px]  basis-1/3 '>
            <Image src={img} alt="picture" fill className=' ' />
        </div>
        <p className=' basis-2/3 text-lg font-bold text-white'> {desc}</p>
    </div> 
    
    </>
  )
}

export default ServiceCard
