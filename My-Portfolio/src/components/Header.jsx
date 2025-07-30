//Header Component
export default function Header() {
  const name = "Venkata Rahul";
  const profession = "Software Engineer";
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav>
        <a href="About">About</a>
        <a href="Projects">My Projects</a>
        <a href="Contact">Contact</a>
      </nav>
    </header>
  );
}