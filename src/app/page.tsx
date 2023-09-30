'use client'
import React from 'react'
import Header from './components/Header'
import CreateNotes from './components/CreateNotes'
import NotesList from './components/NotesList'
export default function Home() {

  return (
    <div className='relative'>
      <Header />
      <CreateNotes />
      <NotesList />
    </div>
  )
}
