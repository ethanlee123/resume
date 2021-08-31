import React, { useEffect } from "react"
import { GrClose } from "react-icons/gr"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Python from "../../assets/images/python.svg"
import Pandas from "../../assets/images/pandas.svg"
import Matplotlib from "../../assets/images/matplotlib.svg"
import Numpy from "../../assets/images/numpy.svg"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

import {
  Background,
  ModalWrapper,
  ModalContent,
  ProjectMeta,
  ProjectVision,
  ProjectFeatures,
  ProjectViewables,
  ProjectTechnologies,
  CloseModalIcon,
  ColoredText,
} from "../ModalStyle"

const Modal = ({ showModal, setShowModal }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { regex: "images/project/MonteCarlo/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 10
              width: 250
            )
          }
        }
      }
    }
  `)
  
  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.querySelector("html")
      showModal
        ? (html.style.overflow = "hidden")
        : (html.style.overflow = "visible")
    }

  }, [showModal])


console.log(allFile)
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <CloseModalIcon
              aria-label="Close modal"
              onClick={() => setShowModal(!showModal)}
            >
              <GrClose />
            </CloseModalIcon>

            <ModalContent>
              <ProjectMeta>
                <div>
                  <h1>MonteCarlo Simulation</h1>
                  <div className="externals">
                    <div className="externals">
                    <a
                      href="https://github.com/ethanlee123/monte_carlo"
                      target="_blank"
                      rel="external noreferrer"
                    >
                      <FaGithub className="icon" />
                    </a>
                  </div>
                  </div>
                </div>
                <p>
                  Status: <ColoredText>complete</ColoredText> | Role:{" "}
                  <ColoredText> Data Science</ColoredText>
                </p>
                <p>
                  01 / 2020 - 01 / 2020 | <ColoredText>Personal</ColoredText>
                </p>
              </ProjectMeta>
              <ProjectVision>
                <h2>Vision</h2>
                <p>
                  A data science project which utilizez python to optimize a portfolio according to the modern portfolio theory.
                </p>
              </ProjectVision>
              <ProjectFeatures>
                <h2>Features</h2>
                <ul>
                  <li>
                    User inputs a few stocks they would like to add to their
                    portfolio.
                  </li>
                  <li>
                    Displays a graph with an 'efficient frontier' which shows
                    the expected return for a given standard deviation.
                  </li>
                  <li>
                    Returns the porfolio weighting for risk tolerant and risk averse investors.
                  </li>
                </ul>
              </ProjectFeatures>
              <ProjectViewables>
                <Swiper
                  slidesPerView={2}
                  pagination={{ clickable: true, type: "progressbar" }}
                  autoplay={true}
                >
                  {allFile.nodes.map(node => {
                    return (
                      <SwiperSlide>
                        <GatsbyImage
                          image={getImage(node.childImageSharp)}
                          alt="project image"
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </ProjectViewables>
              <ProjectTechnologies>
                <h2>Technologies</h2>
                <div className="icons">
                  <Python className="python" />
                  <Pandas className="pandas" />
                  <Matplotlib className="matplotlib" />
                  <Numpy className="numpy" />
                </div>
              </ProjectTechnologies>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}

export default Modal
