import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Paths from './routes/paths'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Paths/>
    </BrowserRouter>
    </>
  )
}

export default App
