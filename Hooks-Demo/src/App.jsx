import { useState } from 'react'
import './App.css'

export default function App() {

  //  State Hooks - useState hook is used to manage state in functional components
  // useState returns an array with two elements: the current state value and a function to update it
  // The first element is the state variable, and the second element is the function
  // to update the state variable
  // The initial state can be set by passing a value to useState
  // Example: const [count, setCount] = useState(0);
  const[currState , updateState] = useState(0);
  const [step , setStep] = useState(2);

  const Incrementcount = () => {
    updateState(currState + step);
  };

  const Decrementcount = () => {
    updateState(currState - step);
  };
  
  return (
    <>
      <div className='app'>
        <h1>Welcome to React Hook's Demo</h1>
        <h2>Counter Value: {currState}</h2>
        <input type='number' value={step} 
        onChange={(num) => setStep(parseInt(num.target.value))}/>
        <button onClick={() => Incrementcount()}>Increment</button>
        <button onClick={() => Decrementcount()}>Decrement</button>
      </div>
    </>
  )
}