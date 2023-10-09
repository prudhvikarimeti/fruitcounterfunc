import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const[mango,setMangoCount]=useState(0);
  const[banana,setBananaCount]=useState(0);

  const incrementMango=()=>{
setMangoCount(mango+1)
  }
  const incrementBanana=()=>{
setBananaCount(banana+1)
  }

  return (
    <div className='main-container'>
      <div className='card-container'>
        <h1 className='heading'>
          Bob ate <span className='count'>{mango}</span> mangoes <span className='count'>{banana}</span> bananas
        </h1>
        <div className='image-container'>
        <div className='d1'>
          <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" className='image' alt="mango"/>
<button className='btn' type="button" onClick={incrementMango}>Eat Mango</button>
        </div>
        <div className='d1'>
          <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" className='image' alt="banana"/>
<button className='btn' type="button" onClick={incrementBanana}>Eat Banana</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
