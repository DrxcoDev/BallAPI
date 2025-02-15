import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Football from './components/fotball'

function App() {


  return (
    <>
      <div className="p-10 md:p-28 bg-neutral-900 h-screen text-gray-200">
        <div className="flex items-center justify-center py-10">
          <h1 className='text-5xl'>With more than 1.000 clubs</h1>
        </div>
        <Football></Football>
      </div>
    </>
  )
}

export default App
