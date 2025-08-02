import { useState } from 'react'
import './App.css'

export default function App() {

  const[count , setCount] = useState(0);

  const Incrementcount = () => {
    setCount(count + 1);
  };

  const Decrementcount = () => {
    setCount(count - 1);
  };
  
  return (
    <>
      <div className='app'>
        <h1>Welcome to React Hook's Demo</h1>
        <h2>Counter Value: {count}</h2>
        <button onClick={() => Incrementcount()}>Increment</button>
        <button onClick={() => Decrementcount()}>Decrement</button>
      </div>
    </>
  )
}