import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Collapse, NavbarBrand, Navbar, Nav,  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ pageInfo }) => (
  <>
  <Navbar expand="lg" color="light" light id="site-navbar">
    <StaticImage
      src="../images/logo-transparent2.png"
      width={70}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="forum logo"
      style={{ backgroundColor: `rgba(0,0,0,0.5)` }}
    />
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
        {/* <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag='a' className='nav-header-link' caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag='a' href='/blah' active>
              Link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
