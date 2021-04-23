import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" />
    <Hero />
    <p>Please Donate Today</p>
  </Layout>
)

export default DonatePage
