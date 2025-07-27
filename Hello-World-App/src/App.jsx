import './App.css'

function Greeting(isMorning){
  return isMorning ? <h1>Good Morning User!</h1> : <h1>Good Evening User!</h1>;
}

export default function App() {
  const buttonText = 'Submit!'
  const dateobj = new Date()
  const isMorning = dateobj.getHours() < 12
  return (
      <div className='App'>
        {Greeting(isMorning)}
        <h1>Welcome To React Projects...</h1>
        <h1>This is my First React Project</h1>
        <button style={{backgroundColor:'orange'}} onClick={() => alert('Submitted!')}>
          {buttonText}</button>
      </div>
  )
}
