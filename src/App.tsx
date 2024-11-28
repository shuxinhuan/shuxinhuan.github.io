import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import News from './components/News'
import About from './components/About'
import Resume from './components/Resume'
import Publication from './components/Publication'
import Prospectives from './components/Prospectives'

function App() {
  const currentUrl = window.location.href
  const initComp = () => {
    if (currentUrl.endsWith('/#cv') || currentUrl.endsWith('/#teaching') || currentUrl.endsWith('/#talks') || currentUrl.endsWith('/#service')) {
      return 'cv'
    }
    else if (currentUrl.endsWith('/#prospectives')) {
      return 'prospectives'
    }
    return 'home'
  }
  const [comp, setComp] = useState<string>(initComp)

  return (
    <>
      <div id="header">
        <div className="first"></div>
        <div className="second"></div>
        <Nav setComp={setComp}/>
      </div>
      <div id="main">
        {comp === 'home' ? <Home /> : comp === 'prospectives' ? <Prospectives /> : <Resume />}
      </div >
      <div id="footer">
        Copyright @ Xinhuan Shu. Last updated: { new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) }
      </div>
    </>
  )
}

export default App


function Home() {
  return (
    <>
      <About />
      <News />
      <Publication />
    </>
  )
}
