import { NavLink } from "react-router-dom";

export function NavBar() {
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#FFDEAD",
    color: "white",
    fontSize: "20px",
    height: "50px",
    alignItems: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#A52A2A",
    padding: "5px",
    fontSize: "1.2em",
    
  };

  

  return (
    <nav style={navBarStyle}>
      <NavLink to="/" style={linkStyle} >
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle} >
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
