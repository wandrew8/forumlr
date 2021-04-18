import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Collapse, NavbarBrand, Navbar, Nav,  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "react-bootstrap"

const Header = ({ pageInfo }) => (
  <>
  <Navbar className="navbar-header" dark expand="lg" id="site-navbar">
    {/* <Container> */}
    <Link to="/" className="link-no-style">
      <Navbar.Brand as="span">Gatsby React Bootstrap</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Home
          </Nav.Link>
        </Link>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            About
          </Nav.Link>
        </Link>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            News
          </Nav.Link>
        </Link>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            EDI
          </Nav.Link>
        </Link>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            ROM
          </Nav.Link>
        </Link>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Contact
          </Nav.Link>
        </Link>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Donate
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
</>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
