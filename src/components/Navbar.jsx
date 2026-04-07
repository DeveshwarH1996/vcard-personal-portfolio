import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item">
            <NavLink to="/" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>About</NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/resume" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>Resume</NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/portfolio" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>Portfolio</NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/blog" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>Blog</NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/publications" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>Publications</NavLink>
          </li>

        </ul>

      </nav>

    </>
  );
}
