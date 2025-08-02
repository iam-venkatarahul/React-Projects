import './App.css'
import StudentProfile from './StudentProfile'

export default function App() {

  const UserDetails1 = {
    name: "Rahul",
    age: 21,
    IsDue: false,
    GithubLink: true
  };

  const UserDetails2 = {
    name: "Shalini",            
    age: 21,
    IsDue: true,
    GithubLink: false
  };
   return (
    <>
      <div className='App'>
        <h2>Hello</h2>
        <StudentProfile {...UserDetails1} />
        <StudentProfile {...UserDetails2} />
      </div>
    </>
  )
}
 