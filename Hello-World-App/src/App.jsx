import './App.css'

export default function App() {
  const buttonText = 'Submit!'
  return (
      <div className='App'>
        <h1>Welcome To React Projects...</h1>
        <h1>This is my First React Project</h1>
        <button style={{backgroundColor:'orange'}} onClick={() => alert('Submitted!')}>
          {buttonText}</button>
      </div>
  )
}
