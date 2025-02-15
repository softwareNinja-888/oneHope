import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from './components/Header'
import gath from '/events/eventsA1.webp'
import { Hero } from './components/Hero'
import { Service } from './components/Service'

function App() {

  return (
    <>
      <div className="bg-bg h-fit w-screen overflow-x-hidden">
        <Header/>
        <Hero/>
        <Service/>
      </div>
    </>
  )
}

export default App
