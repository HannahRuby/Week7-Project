import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <nav>
        <p>Created by Hannah Manieson</p>
        <Link to="https://github.com/HannahRuby">GITHUB</Link>|
        <Link to="/www.linkedin.com/in/hannah-manieson-01097615b">
          LINKEDIN
        </Link>
      </nav>
    </footer>
  );
}
