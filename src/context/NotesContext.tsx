'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { ICreateNote, INote } from "@/interface/INote";
import { Auth } from "./authContext";
import { api } from "@/api";
import { formatString } from "@/utils/formatString";

interface NotesContextType {
  notes: INote[]
  favorites: INote[]
  others: INote[]
  createNote: (Note: ICreateNote) => Promise<void>
  updateNote: (note: INote) => Promise<void>
  deleteNote: (note: INote) => Promise<void>
  searchNotes: (text: string) => void
}

const NotesContext = createContext({} as NotesContextType)
export const notesContext = () => useContext(NotesContext)
export default function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState([] as INote[])
  const [favorites, setFavorites] = useState([] as INote[])
  const [others, setOthers] = useState([] as INote[])
  const { userId } = Auth()

  const getNotes = async () => {
    try {
      if (!userId) return
      const { data } = await api.get(`/user/${userId}/notes`)
      setNotes(data.notes)
      filterNotes(data.notes)
    } catch (error) {
      console.log(error);
    }
  }

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


  const updateNote = async (note: INote) => {
    try {
      await api.put(`/note/update/${note.id}`, {
        title: note.title,
        content: note.content,
        favorite: note.favorite,
        color: note.color
      })
      getNotes()
    } catch (error) {
      console.log(error);
    }
  }

  const deleteNote = async (note: INote) => {
    try {
      await api.delete(`/note/delete/${note.id}`)
      getNotes()
    } catch (error) {
      console.log(error);
    }
  }

  const searchNotes = (text: string) => {
    const formattedText = formatString(text)
    const filteredNotes = notes.filter(note => {
      const formattedTitle = formatString(note.title)
      const formattedContent = formatString(note.content)
      return formattedTitle.includes(formattedText) || formattedContent.includes(formattedText)
    })
    filterNotes(filteredNotes)
  }

  useEffect(() => {
    getNotes()
  }, [userId])
  return (
    <NotesContext.Provider value={{ notes, favorites, others, createNote, updateNote, deleteNote, searchNotes }}>
      {children}
    </NotesContext.Provider>
  )

}
