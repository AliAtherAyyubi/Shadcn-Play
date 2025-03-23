import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='text-2xl text-center font-bold text-red-400 '>
      Shadcn Practice
     </div>
    </>
  )
}

export default App
