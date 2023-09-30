'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { ICreateNote, INote } from "@/interface/INote";
import { Auth } from "./authContext";
import { api } from "@/api";

interface NotesContextType {
  notes: INote[]
  favorites: INote[]
  others: INote[]
  createNote: (Note: ICreateNote) => Promise<void>
}

const NotesContext = createContext({} as NotesContextType)
export const notesContext = () => useContext(NotesContext)
export default function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState([] as INote[])
  const [favorites, setFavorites] = useState([] as INote[])
  const [others, setOthers] = useState([] as INote[])
  const { userId } = Auth()

  const filterNotes = (Notes: INote[]) => {
    const favorite = [] as INote[]
    const other = [] as INote[]
    Notes.forEach(note => {
      if (note.favorite) {
        favorite.push(note)
      } else {
        other.push(note)
      }
    })
    setFavorites(favorite)
    setOthers(other)
  }
  const createNote = async (note: ICreateNote) => {
    try {
      const { data } = await api.post('/note/create', { ...note })
      setNotes([...notes, data])
      filterNotes([...notes, data])
    } catch (error) {
      console.log(error);
    }
  }
  const getNotes = async () => {
    try {
      if (!userId) return
      const { data } = await api.get(`/note/${userId}`)
      setNotes(data)
      filterNotes(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNotes()
  }, [userId])
  return (
    <NotesContext.Provider value={{ notes, favorites, others, createNote }}>
      {children}
    </NotesContext.Provider>
  )

}