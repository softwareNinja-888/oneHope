import { useState } from 'react'

import pastor from '/pastor.jpg'
import church from '/church.jpeg'
import event from '/events/eventsD1.webp'
import { IntroText } from './helper/IntroText'

export function Introduction() {
  const [activeTab, setActiveTab] = useState(0)

  const IntroSections = [
    {id:0,title:'Warm Welcome',description:'Experience a sense of belonging from the moment you arrive'},
    {id:1,title:'Inspiring Sermons',description:'Inspiring sermons that resonate with all'},
    {id:2,title:'Community Events',description:'Engaging community events for all ages'}

  ]
  
  return (
    <div className="px-0 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 w-[80%] mx-auto">
        <div className="relative flex items-center">
          {activeTab === 0 && (
            <img
              alt='picture'
              src={church}
              className="w-full h-72 object-cover transition-opacity duration-300 ease-in"
            />
          )}
          {activeTab === 1 && (
            <img
              alt='picture'
              src={pastor}
              className="w-full h-72 object-cover object-top transition-opacity duration-300 ease-in"
            />
          )}
          {activeTab === 2 && (
            <img
              alt='picture'
              src={event}
              className="w-full h-72 object-cover transition-opacity duration-300 ease-in"
            />
          )}
        </div>
        <div className="flex flex-col gap-8 justify-center">
          {IntroSections.map(el=>{
            return  (
              <IntroText key={el.id} title={el.title} description={el.description} activeTab={activeTab} setActiveTab={setActiveTab} activeNum={el.id}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}


