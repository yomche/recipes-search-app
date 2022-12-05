import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Routing Example App
        </Link>
      </div>
    </nav>
  );
}

export { Header };
