// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './Screen/Header/Header'
import Right from './Screen/RightSide/Right'
import Left from './Screen/leftSide/Left'
import Footer from './Screen/Footer/Footer'
import ThemeSwitch from './Screen/ThemeSwitch/ThemeSwitch'

function App(props) {
  console.log(props,"props ApP");
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='light-mode'><ThemeSwitch/></div>
      <div className='header-Container'><Header /></div>
      <div className='mainContainer'>
         <div className='left-container'><Left/></div>
         <div className='right-container'><Right/>
         <div className='footer-Container'><Footer/></div>
         </div>
      </div>
      
    </>
  )
}

export default App
