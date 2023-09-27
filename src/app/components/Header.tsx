import React from 'react'
import Image from 'next/image'
import noteIcon from './../assets/note-icon.png'
import searchIcon from './../assets/search-icon.png'
import closeIcon from './../assets/close-icon.png'
export default function Header() {
  return (
    <header>
      <div className='flex justify-between items-center px-10 py-2 bg-white' >
        <div className='flex gap-5 items-center w-[100%]' >
          <Image src={noteIcon} alt="note icon" width={36} />
          <p>CoreNotes</p>
          <div className='flex items-center border rounded-[3px] border-[#D9D9D9] shadow-md h-7 bg-white ml-2 w-[100%] sx:[314px] md:w-[530px] min-w-[140px]'>
            <input type="text" className='h-3 pl-2 text-xs focus:outline-none w-[100%]' placeholder='Pesquisar notas' />
            <span className='mr-2'>
              <Image src={searchIcon} alt="search" width={13} />
            </span>
          </div>
        </div>
        <Image src={closeIcon} alt="closer" width={13} />
      </div>
    </header>
  )
}