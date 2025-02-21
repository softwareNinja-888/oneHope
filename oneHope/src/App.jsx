import {Header} from './components/Header'
import { Hero } from './components/Hero'
import {Introduction} from './components/Introduction'
import { ServiceTime } from './components/ServiceTime'
import { Services } from './components/Services'
import { Events } from './components/Events'
import { PastorProfile } from './components/Pastor'
import {ScrollToTop} from './components/helper/ScrollToTop'



function App() {

  return (
    <>
      <div className="bg-bg h-fit w-screen overflow-x-hidden">
        <Header/>
        <Hero/>
        <ServiceTime/>
        <Introduction />
        <Services/>
        <Events/>
        <PastorProfile/>
        <ScrollToTop/>
      </div>
    </>
  )
}

export default App
