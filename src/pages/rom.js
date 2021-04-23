import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const RomPage = () => (
  <Layout>
    <SEO title="ROM" />
    <Hero />
    <p>Welcome to ROM</p>
  </Layout>
)

export default RomPage
