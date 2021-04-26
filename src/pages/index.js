import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card } from "react-bootstrap"
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
        <p 
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          >Forum for Leadership and Reconciliation (Forum) is a not-for-profit 501(c)(3) organization
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
    <Row className="my-4">
      <Col md={6}>
        <Link to="/rom">
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease">
            <Card className="my-3 company-card card">
            <StaticImage 
              src="../images/rom-wide.png"
              quality={95}
              loading="lazy"
              placeholder="none"
              formats={["AUTO", "WEBP", "AVIF"]}
              objectFit="cover"
              style={{margin: `1rem auto 0rem auto`, height: `105px`, width: `300px`}}
              alt="Renewing Our Minds" />
              <Card.Body>
                <Card.Title className="text-center card-title">Renewing Our Minds</Card.Title>
                <hr/>
                <Card.Text className="card-text">
                      The Renewing Our Minds Gathering (ROM) has been a defining and
                      life
                      changing experience for hundreds of young participants from over 50 countries.
                      Many
                      alumni have emerged as leaders of influence and are today making a difference in
                      the
                      political, social and humanitarian and religious arenas of their countries.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>
      </Col>
      <Col md={6}>
        <Link to="/edi">
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease">
            <Card className="my-3 company-card card">
            <StaticImage 
              src="../images/edi-wide.png"
              quality={95}
              loading="lazy"
              placeholder="none"
              formats={["AUTO", "WEBP", "AVIF"]}
              objectFit="cover"
              style={{margin: `1rem auto 0rem auto`, height: `105px`, width: `300px`}}
              alt="Economics, Diplomacy and Integrity" />
              <Card.Body>
                <Card.Title className="text-center card-title">Economics, Diplomacy and Integrity</Card.Title>
                <hr/>
                <Card.Text className="card-text">
                  Economics, Diplomacy and Integrity (EDI) is designed to support
                  professionals and students in the areas of economics, business and politics. We
                  believe
                  that the best way to fight against unhealthy rivalry among and within nations is
                  to
                  establish an economic and political community based on Jesus's life and
                  principals.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>
      </Col>
    </Row>
    </Container>
  </Layout>
)

export default IndexPage
