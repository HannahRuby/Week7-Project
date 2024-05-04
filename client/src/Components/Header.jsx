import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Profoundly</h1>
      <nav>
        <Link to="/">Home</Link>|<Link to="/about">About</Link>|
        <Link to="/users">Users</Link>| <Link to="/socials">Socials</Link>|
        <Link to="/news">News</Link>|
      </nav>
    </header>
  );
}
