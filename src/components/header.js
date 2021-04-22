import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Collapse, NavDropdown, Navbar, Nav,  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import logo from '../images/logo-transparent2.png'
import useScrollHandler from '../hooks/useScrollHandler'

const Header = ({ pageInfo }) => {
  console.log("Scrollhandler", useScrollHandler())
  return (
    <>
      <Navbar expand="lg" variant="dark" id="site-navbar" fixed="top" className={useScrollHandler() > 100 ? "expanded" : ""}>
        <img width="70px" src={logo} alt="" />
        <Link to="/" className="nav-link">
          <Navbar.Brand className="title" as="span">Forum for Leadership and Reconciliation</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="nav-header-link">
              <Nav.Link as="span" eventKey="page-2">
                Home
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="nav-header-link">
              <Nav.Link as="span" eventKey="page-2">
                About
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="nav-header-link">
              <Nav.Link as="span" eventKey="page-2">
                News
              </Nav.Link>
            </Link>
            <NavDropdown title="ROM" id="collasible-nav-dropdown" className="nav-header-link">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Link to="/page-2" className="nav-header-link">
              <Nav.Link as="span" eventKey="page-2">
                Contact
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="nav-header-link">
              <Nav.Link as="span" eventKey="page-2">
                Donate
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
