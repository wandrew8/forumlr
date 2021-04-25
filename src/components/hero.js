import * as React from "react"
import PropTypes from "prop-types"
import { Jumbotron, Container } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({ isFullSize }) => (
    <Jumbotron fluid className={isFullSize ? "hero-full-size hero" : "hero"}>
        <StaticImage  
            src="../images/ocean.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt=""
            style={{ marginBottom: `1.45rem` }}
        />
        <div className="mask"></div>
        <div id="container-fluid">
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </Jumbotron>
)

Hero.propTypes = {
  isFullSize: PropTypes.bool,
}

export default Hero
