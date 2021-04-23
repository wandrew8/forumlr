import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const EdiPage = () => (
  <Layout>
    <SEO title="EDI" />
    <Hero />
    <p>Welcome to EDI</p>
  </Layout>
)

export default EdiPage
