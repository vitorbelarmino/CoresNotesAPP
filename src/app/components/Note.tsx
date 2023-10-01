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
import { notesContext } from "@/context/NotesContext"

interface NoteProps {
  note: INote
}
export default function Note({ note, }: NoteProps) {
  const [data, setData] = useState<INote>(note)
  const [edit, setEdit] = useState(false)
  const [colorOptions, setColorOptions] = useState(false)
  const { updateNote, deleteNote } = notesContext()

  const setColor = (color: string) => {
    updateNote({
      ...data,
      color
    })
    setData({
      ...data,
      color
    })
    setColorOptions(false)
  }

  const handleSetFavorite = () => {
    updateNote({
      ...data,
      favorite: !data.favorite
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, } = e.target
    console.log(name, value);

    if (value === '\n') {
      return
    }
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      updateNote({ ...data })
      setEdit(false)
    }
  }

  const handleDelete = () => {
    deleteNote({
      ...data
    })
  }

  return (
    <div style={{ background: data.color }} className={`relative w-[390px] h-[410px] border-[#D9D9D9] border-[1px] rounded-[25px] shadow-sm`}>
      <div className='flex justify-between items-center px-4 pb-2 pt-3 border-b-[1px] border-[#D9D9D9]'>
        <input disabled={edit ? false : true} type="text" placeholder='Título' name="title" value={data.title} onChange={handleChange} onKeyDown={handleSubmit} className='focus:outline-none  placeholder:text-black placeholder:font-bold text-sm w-full bg-transparent ' />
        <Image className="cursor-pointer hover:scale-[110%]" alt='favorite icon' src={data.favorite ? FavoriteOn : FavoriteOff} width={19} onClick={handleSetFavorite} />
      </div>
      <textarea disabled={edit ? false : true} name="content" placeholder='Criar nota...' value={data.content} onChange={handleChange} onKeyDown={handleSubmit} className='resize-none w-full h-[80%] focus:outline-none px-4 pt-3 text-xs placeholder:text-xs bg-transparent'></textarea>
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2">
          <div className={`${edit && 'bg-[#FFE3B3]'} rounded-full flex justify-center items-center w-[24px] h-[24px] cursor-pointer hover:scale-[110%]`} onClick={() => setEdit(!edit)}>
            <Image src={editIcon} alt="edit icon" width={17} />
          </div>
          <div className={`relative ${colorOptions && 'bg-[#FFE3B3]'} rounded-full flex justify-center items-center w-[24px] h-[24px]`}>
            <Image className="cursor-pointer hover:scale-[110%]" src={paintIcon} alt="paint icon" width={17} onClick={() => setColorOptions(!colorOptions)} />
            {colorOptions && <Colors setColor={setColor} />}
          </div>
        </div>
        <p className="w-[13px] h-[13px] cursor-pointer hover:scale-[110%]">
          <Image src={closeIcon} alt="closer " width={14} onClick={handleDelete} />
        </p>
      </div>
    </div>
  )
}