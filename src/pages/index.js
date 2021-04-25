import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Hero from '../components/hero'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Hero  />
    <Container fluid className="home-page">
      <Row>
        <Col>
          <h1 className="m-auto">What is Forum for Leadership and Reconciliation?</h1>
          <div class="heading-underline"></div>
        </Col>
      </Row>
    </Container>
   
  </Layout>
)

export default IndexPage
