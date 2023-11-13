
import Weather from './components/Weather'
import './App.css'
import React, { useEffect } from 'react'


function App() {

    useEffect(()=>{
    if('serviceWorker' in navigator){
      window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/sw.js')
        .then(registration=>{
          console.log('sw registered: ', registration);
        })
        .catch(registrationError=>{
          console.log('sw registration failled', registrationError);
        })
      })
    }
  }, [])

  return (
    <>
       <Weather/>
    </>
  )
}

export default App
