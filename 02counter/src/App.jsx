import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  /*
  When your component refreshes, normal variables forget their values.
  useState helps your component remember things. 

  It gives two things:
  const [value, setValue] = useState(startValue);

  value → the current data
  setValue → a function to change that data
  */
  
  // let counter = 5;

  function addValue(){
    // counter++;
        
    /*
    counter++ changes the value, but the UI does not update.
    React only updates the screen when state changes.
    That’s why we must use hooks (like useState) to update the UI.
    */
    // console.log(counter);

    //calling the function
    // counter = counter + 1
    // setCounter(counter)

    if(counter < 20)
    {
      setCounter(counter+1)
    }else{
      alert('Counter cannot go above 20')
    }
  }

  function decreaseValue(){
    // counter = counter - 1;
    // setCounter(counter)

    if(counter > 0)
    {
      setCounter(counter-1)
    }else{
      alert('Counter cannot go below 0')
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}
      >Increase value</button><br /><br />
      <button
      onClick={decreaseValue}
      >Decrease value</button>
    </>
  )
}

export default App
