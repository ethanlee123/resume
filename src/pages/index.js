import React, { useState, useEffect, createRef } from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FaArrowCircleDown } from "react-icons/fa"

import Layout from "../components/Layout"
import Skills from "./Skills"
import About from "./About"
import UpcomingProjects from "./UpcomingProjects"
import Projects from "./Projects"
import Contact from "./Contact"

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import styled from "styled-components"

// Loader
import lottie from "lottie-web"
// Animation by Benjamin Yang https://lottiefiles.com/64400-loader
import loader from "../animations/loader.json"

const Home = ({ data }) => {
  const { banner } = data

  const bannerImage = getImage(banner)
  const bgImage = convertToBgImage(bannerImage)

  const [isLoading, setIsLoading] = useState(false)
  const loadingAnimationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: loadingAnimationContainer.current,
      renderer: "svg",
      loop: 0.1,
      autoplay: true,
      animationData: loader,
    })
    anim.onComplete = () => {
      setIsLoading(false)
    }
    return () => anim.destroy() // optional clean up for unmounting
  }, [])

  return (
    <>
      {isLoading ? (
        <div 
          className="loading-animation-container" 
          ref={loadingAnimationContainer} 
          style={{
            width: '25%',
            margin: '0 auto'
          }}/>
      ) : (
        <Layout>
          <Index id="index">
            <BackgroundImage
              className="bgImgContainer"
              Tag="section"
              // Spread bgImage into BackgroundImage:
              {...bgImage}
              preserveStackingContext
            >
              <div className="indexContent">
                <div className="top-left">
                  <h2 className="title">tech.</h2>
                  <h2 className="title">finance.</h2>
                  <h2 className="title">medicine.</h2>
                  <h2 className="title">automotive.</h2>
                </div>
                <AnchorLink
                  id="arrow-down"
                  to="/#skills"
                  className="arrow-down"
                >
                  <FaArrowCircleDown className='arrow-down-icon'/>
                </AnchorLink>

                <div className="bottom-right">
                  <AnchorLink
                    className="circle button"
                    id="get-in-touch"
                    to="/#contact"
                  >
                    Get In Touch!
                  </AnchorLink>
                  <div className="name subheading">Ethan Lee</div>
                </div>
              </div>
              <div className="gradient-index"></div>
            </BackgroundImage>
          </Index>
          <Skills />
          <About />
          <UpcomingProjects />
          <Projects />
          <Contact />
        </Layout>
      )}
    </>
  )
}

export const query = graphql`
  query Banner {
    banner: file(relativePath: { eq: "images/lamp.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 90)
      }
    }
  }
`

const Index = styled.section`
  height: 90vh;
  margin-top: 70px;
  .gradient-index {
    position: absolute;
    top: 0;
    left: 0;
    height: 90vh;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8614189680232558) 17%,
      rgba(235, 235, 235, 0.2654887354651163) 100%
    );
    z-index: -1;
  }
  .text-center {
    text-align: center;
  }
  .bgImgContainer {
    ::after {
      position: relative;
      bottom: 0;
      left: 0;
      background-attachment: fixed;

    }
  }
  .indexContent {
    width: 80%;
    margin: 0 auto;
    height: 90vh;
    display: grid;
    grid-template:
      "topleft ..." 80%
      "arrowdown bottomright" 20%
      / 70% 30%;
    .top-left {
      grid-area: topleft;
      margin-top: 40px;
      height: 80vh;
      display: flex;
      flex-direction: column;
      h2 {
        margin-bottom: 20px;
        opacity: 0.5;
        :nth-child(1) {
          opacity: 1;
        }
        :hover {
          opacity: 1;
        }
        transition: all 290ms ease-in-out;

      }
    }
    .arrow-down {
      grid-area: arrowdown;
      position: relative;
      bottom: -15%;
      font-size: 2.5rem;
      color: rgba(255, 255, 255, 0.5);
      .arrow-down-icon:hover {
        color: #fff;
      }
    }
    .bottom-right {
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      .circle {
        border: 2px solid #904e55;
        border-radius: 50%;
        text-decoration: none;
        width: 100px;
        padding: 30px 15px;
        text-align: center;
        font-size: 0.8rem;
        position: relative;
        right: 35%;
        transform: rotate(-25deg);
      }
    }
  }
`

export default Home
