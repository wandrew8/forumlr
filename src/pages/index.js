import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Hero  />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
    <h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1><h1>Hi people</h1>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
