import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Planos from "./components/Planos/cardsplanos";
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Paths from './routes/paths';


function App() {
  const [count, setCount] = useState(0)

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
