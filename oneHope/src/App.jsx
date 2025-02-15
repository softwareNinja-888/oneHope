import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {HeroImage} from './components/helper/HeroImage'

import gath from '/events/eventsA1.webp'

function App() {

  return (
    <>
      <div className="bg-btn">
        <div className="text-4xl text-btn font-lora ">"A warm and inviting scene of a diverse group of people standing together in worship, facing forward with their backs to the viewer. The setting is bathed in golden sunlight, creating a soft, glowing atmosphere. The people wear casual and semi-formal clothing, with natural lighting enhancing the sense of community and faith. The background is slightly blurred to emphasize the warmth and spiritu</div>
        <HeroImage img={gath}/>
      </div>
    </>
  )
}

export default App
