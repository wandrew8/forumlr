import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './footer'
import Header from "./header"
import Hero from './hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'

const Layout = ({ children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} pageInfo={pageInfo} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 auto`,
        }}
      >
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
