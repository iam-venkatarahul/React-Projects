export default function Contact(){
    const email = "chintakayalavvrahul"
    return(
        <section id='contact' className="contact">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, please reach out via email at <a href="mailto:"></a>{`${email.toLowerCase().replace(/\s/g, '')}@gmail.com`}</p>
        <p>Or connect with me on <a href="https://www.linkedin.com/in/venkata-rahul" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
    );
}