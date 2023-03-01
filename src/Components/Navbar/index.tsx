import { NavLink } from "react-router-dom";
import { linkStyle, navBarStyle } from "./style";

export function NavBar() {
  
  return (
    <nav className="navbar  fixed-top navbar-expand-lg bg-body-tertiary " style={navBarStyle} >
      <NavLink to="/" style={linkStyle} >
        Home
      </NavLink>
      <NavLink to="/AboutUs" style={linkStyle} >
        AboutUs
      </NavLink>
      <NavLink to="/contact" style={linkStyle} >
        Contact
      </NavLink>
      <NavLink to="/Analytics" style={linkStyle} >
        Analytics
      </NavLink>
      <NavLink to="/tasks" style={linkStyle} >
        Tasks
      </NavLink>
      <NavLink to="/team" style={linkStyle} >
        Team
      </NavLink>
    </nav>
  );
}