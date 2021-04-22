import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Hero />
    <p>Welcome to About page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
