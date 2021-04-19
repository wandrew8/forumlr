import * as React from "react"
import PropTypes from "prop-types"
import { Jumbotron, Container } from 'reactstrap';
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({ isFullSize }) => (
    <div>
        <Jumbotron fluid className={isFullSize ? "hero-full-size hero" : "hero-half-size hero"}>
            <Container fluid>
            <StaticImage  
                src="../images/ocean.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt=""
                style={{ marginBottom: `1.45rem` }}
                />
                <h1 className="display-3">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Container>
        </Jumbotron>
    </div>
)

Hero.propTypes = {
  isFullSize: PropTypes.bool,
}

export default Hero
