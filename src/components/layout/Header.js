import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({});
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    setuser(user);
  }, []);

  const handleOnLogout = ()=>{
    // remove the user from a local storage
    alert ("login out");
    // redirect user to the login page
    sessionStorage.removeItem("user");
    navigate("/")
  }
  return (
    <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <div className="nav-link fw-bolder text-warning">
                  Welcome back {user?.name}
                </div>
                <Link to="/" className="nav-link" onClick={handleOnLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  
                </Link>
                <Link to="/register" className="nav-link">
                  {/* Register */}
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
