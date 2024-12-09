import React from 'react'
import Image from 'next/image';

const Card = ({name,profession,imageUrl}:{name:string,profession:string,imageUrl:string}) => {
  return (
    <div className='w-full lg:w-[312px] h-[446px]'>
        <div className='w-full h-[380px] flex justify-center items-center'>
        <Image 
          src={imageUrl} 
          alt={'chef'} 
          width={310}
          height={380}

          className="w-full h-full object-cover" 
        />
        </div>
        <div className='flex flex-col  items-center w-full h-[66px]'>
         <h2 className='font-[700] text-[20px]'>{name}</h2>
         <p>{profession}</p>
        </div>
    </div>
  )
}

export default Card;