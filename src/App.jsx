import { useState } from 'react'
import Planos from "./components/Planos/cardsplanos";
import './App.css'
const planos = [
  {
    titulo: "PLANO FIDELIDADE 12 MESES",
    duracao: "12 MESES",
    preco: 389, 
  },
  {
    titulo: "PLANO FIDELIDADE 6 MESES",
    duracao: "6 MESES",
    preco: 499,
  },
  {
    titulo: "PLANO TRIMESTRAL",
    duracao: "3 Mes",
    preco: 700,
  },
  
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Planos />
    </>
  )
}

export default App
