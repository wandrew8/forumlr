import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Hero from '../components/hero'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../images/logo-transparent2.png'

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Hero  title="Forum for Leadership and Reconciliation"/>
    <Container className="home-page">
      <Row>
        <Col md={12}>
          <h1 className="text-center heading mb-3">What is Forum for Leadership and Reconciliation?</h1>
          <div class="heading-underline m-auto"></div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center">
          <StaticImage  
              src="../images/logo-transparent2.png"
              quality={95}
              loading="lazy"
              placeholder="none"
              formats={["AUTO", "WEBP", "AVIF"]}
              objectFit="cover"
              alt="Forum for Leadership and Reconciliation"
              style={{ marginBottom: `1.45rem`, height: `226px`, width: `250px`, objectFit: 'cover' }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center">
        <p>Forum for Leadership and Reconciliation (Forum) is a not-for-profit 501(c)(3) organization
            created in 2011 to support two existing projects: <strong>Renewing Our Minds (ROM) </strong>
            founded in 1999
            and <strong>Economics, Diplomacy and Integrity (EDI)</strong> started in 2006. Forum continues
            to support those
            projects and creates projects that promote the development of leaders committed to
            reconciliation, peace-building and integrity. We base our principles on the life of Jesus as
            Forum continues to pursue its mission through relational education, training, mentorship and
            coaching, as we go out to serve and care for the communities we live. Striving to be Ambassadors
            for a Better World.
        </p>
        </Col>
      </Row>
    </Container>
   
  </Layout>
)

export default IndexPage
