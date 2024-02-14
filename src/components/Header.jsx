import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// logo and Images
import logo from "../assets/transway.png";
import { Link } from "react-router-dom";

// authentication
import { useAuth0 } from "@auth0/auth0-react";

function CollapsibleExample() {

  const { loginWithRedirect, user, isAuthenticated, isLoading ,logout} = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={logo} className="" width={120} height={50} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features </Nav.Link>
            <Nav.Link href="#pricing">Top Runs </Nav.Link>
            <NavDropdown title="Manage Booking" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav> 
          {isAuthenticated ? (
            <img src={user.picture} alt={user.name} className="w-6 rounded-xl m-2" />
          
          ) : " "}
            </Nav>
          {isAuthenticated ? (
             
            <NavDropdown  title={ user.name} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cancellation
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">  </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {" "}
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
