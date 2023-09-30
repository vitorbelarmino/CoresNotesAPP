'use client'
import React, { useState } from "react"
import Image from 'next/image'
import FavoriteOn from '../../assets/favorite-on.png'
import FavoriteOff from '../../assets/favorite-off.png'
import paintIcon from '../../assets/paint-icon.png'
import editIcon from '../../assets/edit-icon.png'
import closeIcon from '../../assets/close-icon.png'
import Colors from "./Colors"
import { INote } from "@/interface/INote"


interface NoteProps {
  note: INote
}
export default function Note({ note, }: NoteProps) {
  const [data, setData] = useState<INote>(note)
  const [edit, setEdit] = useState(false)
  const [colorOptions, setColorOptions] = useState(false)

  const setColor = (color: string) => {
    setData({ ...data, color })
  }

  return (
    <div style={{ background: data.color }} className={`relative w-[390px] h-[410px] border-[#D9D9D9] border-[1px] rounded-[25px] shadow-sm`}>
      <div className='flex justify-between items-center px-4 pb-2 pt-3 border-b-[1px] border-[#D9D9D9]'>
        <input disabled={edit ? false : true} type="text" placeholder='Título' defaultValue={data.title} className='focus:outline-none  placeholder:text-black placeholder:font-bold text-sm w-full bg-transparent' />
        <Image alt='favorite icon' src={data.favorite ? FavoriteOn : FavoriteOff} width={19} onClick={() => setData({ ...data, favorite: !data.favorite })} />
      </div>
      <textarea disabled={edit ? false : true} name="" id="" placeholder='Criar nota...' defaultValue={data.content} className='resize-none w-full h-[80%] focus:outline-none px-4 pt-3 text-xs placeholder:text-xs bg-transparent'></textarea>
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2">
          <div className={`${edit && 'bg-[#FFE3B3]'} rounded-full flex justify-center items-center w-[24px] h-[24px]`} onClick={() => setEdit(!edit)}>
            <Image src={editIcon} alt="edit icon" width={17} />
          </div>
          <div className={`relative ${colorOptions && 'bg-[#FFE3B3]'} rounded-full flex justify-center items-center w-[24px] h-[24px]`}>
            <Image src={paintIcon} alt="paint icon" width={17} onClick={() => setColorOptions(!colorOptions)} />
            {colorOptions && <Colors setColor={setColor} />}
          </div>
        </div>
        <p className="w-[13px] h-[13px]">
          <Image src={closeIcon} alt="closer" width={14} />
        </p>
      </div>
    </div>
  )
}