'use client'
import { notesContext } from "@/context/NotesContext"
import React from "react"
import Note from "./Note"
export default function NotesList() {
  const { favorites, others } = notesContext()
  return (
    <div className="pl-24 pr-14">
      {
        favorites.length > 0 &&
        <p className="pl-5 text-sm">Favoritas</p>
      }
      <div className="gap-6  flex flex-wrap w-full">
        {favorites.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </div>
      {
        others.length > 0 && favorites.length > 0 &&
        <p className="pl-5 text-sm pt-6">Outras</p>
      }
      <div className="gap-6 flex flex-wrap w-full">
        {others.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </div>
    </div>
  )
}