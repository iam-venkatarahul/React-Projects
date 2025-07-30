//About Component
export default function About() {
  const name = "Venkata Rahul"
  const profession = "Software Engineer"
    return(
        <section id = 'about' className="about">
        <h2>About Me</h2>
        <p>
          Hello I am {name} a passionate {profession} with a strong 
          foundation in designing, developing, and deploying 
          scalable applications. I enjoy solving real-world problems 
          through clean code and efficient architecture. With hands-on 
          experience in full-stack development, I actively contribute to 
          all phases of the development lifecycle from planning and 
          coding to testing and deployment.
        </p>
        </section>

    )
}