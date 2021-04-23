import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Hero />
    <p>Welcome to Forum's Blog</p>
  </Layout>
)

export default BlogPage
