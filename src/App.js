import React, { useEffect } from "react";

export default function App(){

  const [currentAdvice, setCurrentAdvice] = React.useState({})
  
  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      setCurrentAdvice(data.slip)
      
    })
    console.log(currentAdvice)
    console.log("You clicked me for adivce")
    
    
  }



  console.log(currentAdvice)

  
 

 
  
  
  return(
    <>
      <p>{currentAdvice.advice}</p>
      <button onClick={() => getAdvice()}>get advice</button>
    </>
  )

}