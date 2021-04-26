import * as React from "react"
import PropTypes from "prop-types"
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({ isFullSize, title }) => (
    <Jumbotron fluid className={isFullSize ? "hero-full-size hero" : "hero"}>
        <StaticImage  
            src="../images/ocean.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt=""
            style={{ marginBottom: `1.45rem`, height: `500px`, objectFit: `cover` }}
        />
        <div className="mask"></div>
        <Container fluid className="hero-container">
            <Row>
                <Col md={12} xl={8} className="mx-auto">
                    <h1 className="heading text-center">{title}</h1>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)

Hero.propTypes = {
  isFullSize: PropTypes.bool,
}

export default Hero
