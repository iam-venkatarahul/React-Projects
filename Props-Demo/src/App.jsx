import './App.css'
import StudentProfile from './StudentProfile'

export default function App() {

  const handleGitClick = (GithubLink) => {
    alert(`You Clicked on the GitHub link: ${GithubLink}`);
  }
    return (
    <>
      <div className='App'>
        <h2>Hello</h2>
        <StudentProfile name="Rahul" age="21" IsDue= {false} GithubLink={true} />
        <StudentProfile name="Shalini" age="21" IsDue = {true} GithubLink= {false} />
      </div>
    </>
  )
}
 