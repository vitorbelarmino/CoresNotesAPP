'use client'
import React from 'react'
import Header from './components/Header'
import CreateNotes from './components/CreateNotes'
import NotesList from './components/NotesList'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {

  return (
    <div className='relative'>
      <ToastContainer hideProgressBar={true} autoClose={2500} />
      <Header />
      <CreateNotes />
      <NotesList />
    </div>
  )
}
