import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Content from './components/custom/content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Content />
    </>
  )
}

export default App
