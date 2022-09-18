import React, { useEffect } from "react";
import "./App.css"
import { BsFillDice5Fill } from "react-icons/bs"

export default function App(){

  const [currentAdvice, setCurrentAdvice] = React.useState({advice: "click for advice"})
  
  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      setCurrentAdvice(data.slip)
      
    })

  
  
  }

  return(
    <div className="app-container">
      <div className="advice-container">
        {currentAdvice.id && <p className="advice-number">Advice #{currentAdvice.id}</p>}
        <p className="advice-text">{currentAdvice.advice}</p>
        <div className="quote-container">
          <hr></hr><h3> '' </h3><hr></hr>
        </div>
        <div className="button-container">
          <button className="btn-get-advice" onClick={() => getAdvice()}><BsFillDice5Fill /></button>
        </div>
      </div>
    </div>
  )

}