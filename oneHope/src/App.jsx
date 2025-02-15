import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from './components/Header'
import gath from '/events/eventsA1.webp'
import { Hero } from './components/Hero'

function App() {

  return (
    <>
      <div className="bg-bg h-screen w-screen overflow-x-hidden">
        <Header/>
        <Hero/>
      </div>
    </>
  )
}

export default App
