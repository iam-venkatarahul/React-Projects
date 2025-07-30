//Projects Component
export default function Projects(){

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

    return(
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

    );
}