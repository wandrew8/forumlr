import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero />
    <p>Contact us for more information!</p>
  </Layout>
)

export default ContactPage
