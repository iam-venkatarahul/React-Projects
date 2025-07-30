import './App.css'
import StudentProfile from './StudentProfile'

function App() {
    return (
    <>
      <div>
        <h2>Hello</h2>
        <StudentProfile name="Rahul" age="21" IsDue= {false} />
        <StudentProfile name="Shalini" age="21" IsDue = {true}/>
      </div>
    </>
  )
}

export default App
