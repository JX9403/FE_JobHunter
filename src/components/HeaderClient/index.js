import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './HeaderClient.scss'

const HeaderClient = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className='navbar-branch mr-4' to="/">JOBHUNTER</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='mr-4' to="/">Home</NavLink>
            <NavLink className='mr-4' to="/contact">All Jobs</NavLink>
            <NavLink className='mr-4' to="/contact">All Companies</NavLink>
            <NavLink className='mr-4' to="/contact">About</NavLink>
          </Nav>
          <Nav>
            <button type="button" class="btn btn-outline-secondary ">Log in</button>
            <button type="button" class="btn btn-secondary ml-2">Sign in</button>
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <NavLink to="#home">Login</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to="#home">Logout</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to="#home">Profile</NavLink>
                Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderClient;