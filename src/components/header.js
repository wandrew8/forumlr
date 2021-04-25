import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { mediaBreakpoints } from '../media-queries/breakpoints'
import { Collapse, NavDropdown, Navbar, Nav,  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import logo from '../images/logo-transparent2.png'
import useScrollHandler from '../hooks/useScrollHandler'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Header = ({ pageInfo }) => {
let isPageWide = useMediaQuery('(min-width: 600px)') 
console.log(isPageWide)
 return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" id="site-navbar" fixed="top" className={useScrollHandler() > 100 ? "expanded" : ""}>
        <img width="70px" src={logo} alt="" />
        {isPageWide ? 
          <Link to="/" className="nav-link">
            <Navbar.Brand className="title" as="span">Forum for Leadership and Reconciliation</Navbar.Brand>
          </Link>
          :
          null
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="nav-header-link nav-header">
              <Nav.Link as="span" eventKey="home">
                Home
              </Nav.Link>
            </Link>
            <Link to="/about" className="nav-header-link nav-header">
              <Nav.Link as="span" eventKey="about">
                About
              </Nav.Link>
            </Link>
            <Link to="/blog" className="nav-header-link nav-header">
              <Nav.Link as="span" eventKey="blog">
                Blog
              </Nav.Link>
            </Link>
            <NavDropdown title="ROM" id="nav-dropdown-rom" className="nav-header-link">
              <NavDropdown.Item>
                <Link to="/rom" className="nav-dropdown-link">
                  <Nav.Link as="span" eventKey="page-2">
                    Home
                  </Nav.Link>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/" className="nav-dropdown-link">
                  <Nav.Link as="span" eventKey="page-2">
                    Home
                  </Nav.Link>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/" className="nav-dropdown-link">
                  <Nav.Link as="span" eventKey="page-2">
                    Home
                  </Nav.Link>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EDI" id="nav-dropdown-edi" className="nav-header-link">
              <NavDropdown.Item>
                <Link to="/edi" className="nav-dropdown-link">
                  <Nav.Link as="span" eventKey="page-2">
                    Home
                  </Nav.Link>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/edi" className="nav-dropdown-link">
                  <Nav.Link as="span" eventKey="page-2">
                    Home
                  </Nav.Link>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/edi" className="nav-dropdown-link">
                  <Nav.Link as="span" eventKey="page-2">
                    Home
                  </Nav.Link>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/contact" className="nav-header-link nav-header">
              <Nav.Link as="span" eventKey="contact">
                Contact
              </Nav.Link>
            </Link>
            <Link to="/donate" className="nav-header-link nav-header">
              <Nav.Link as="span" eventKey="donate">
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
