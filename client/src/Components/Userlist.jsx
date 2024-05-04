import { Link } from "react-router-dom";

export default function Userlist() {
  return (
    <div>
      <h1>Users</h1>
      <nav>
        <ul>
          <Link to="/John Doe">Home</Link>|<Link to="/Mary">About</Link>|
          <Link to="/Janet Doe">Users</Link>| <Link to="/socials">Socials</Link>
          |<Link to="/news">News</Link>|
        </ul>
      </nav>
    </div>
  );
}
