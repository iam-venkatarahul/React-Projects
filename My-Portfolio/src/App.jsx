import './App.css'

export default function App() {
  const name = "Venkata Rahul"
  const profession = "Software Engineer"
  const email = "chintakayalavvrahul"
  const projects = [
    {
      title: "Project One",
      description: "An Ecommerce Application built using Spring Boot",
      link: "https://github.com/iam-venkatarahul/Java-Ecommerce-Application"
    },
    {
      title: "Project Two",
      description: "Developed an Ultimate DevOps CICD pipeline.",
      link: "https://github.com/iam-venkatarahul/Ultimate-CICD-Pipeline"   
    }
  ]
  return (
    <>
    <div className="App">
      {/* Header Section */}
      <header className ="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href = "About">About</a>
          <a href = "Projects">My Projects</a>
          <a href = "Contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id = 'about'className="about">
        <h2>About Me</h2>
        <p>
          Hello I am {name} a passionate {profession} with a strong 
          foundation in designing, developing, and deploying \
          scalable applications. I enjoy solving real-world problems 
          through clean code and efficient architecture. With hands-on 
          experience in full-stack development, I actively contribute to all phases of the development lifecycle — from planning and coding to testing and deployment.
        </p>
        </section>

      {/* Projects Section */}
      <section id = 'projects' className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className="contact">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, please reach out via email at <a href="mailto:"></a>{`${email.toLowerCase().replace(/\s/g, '')}@gmail.com`}</p>
        <p>Or connect with me on <a href="https://www.linkedin.com/in/venkata-rahul" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2023 {name}. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

