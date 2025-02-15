import { useState } from 'react'

import {Header} from './components/Header'
import { Hero } from './components/Hero'
import { ServiceTime } from './components/ServiceTime'
import { Services } from './components/Services'

function App() {

  return (
    <>
      <div className="bg-bg h-fit w-screen overflow-x-hidden">
        <Header/>
        <Hero/>
        <ServiceTime/>
        <Services/>
      </div>
    </>
  )
}

export default App
