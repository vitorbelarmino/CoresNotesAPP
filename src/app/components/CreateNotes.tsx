'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import FavoriteOn from '../assets/favorite-on.png'
import FavoriteOff from '../assets/favorite-off.png'
export default function CreateNotes() {
  const [favorite, setFavorite] = useState(false)

  return (
    <div className='flex justify-center m-6'>
      <div className='w-[390px] md:w-[530px] border-[#D9D9D9] border-[1px] rounded-[25px] sm:rounded-[3px] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.25)] bg-white overflow-hidden'>
        <div className='flex justify-between items-center px-4 pb-1 pt-2 border-b-2 border-[#D9D9D9]'>
          <input type="text" placeholder='Título' className='focus:outline-none  placeholder:text-black placeholder:font-bold text-sm w-full' />
          <Image alt='favorite icon' src={favorite ? FavoriteOn : FavoriteOff} width={19} onClick={() => setFavorite(!favorite)} />
        </div>
        <textarea name="" id="" placeholder='Criar nota...' className='resize-none h-11 w-full focus:outline-none px-4 pt-3 text-xs placeholder:text-xs'></textarea>
      </div>

    </div>
  )
}