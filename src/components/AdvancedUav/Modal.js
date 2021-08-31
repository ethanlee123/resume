import React, { useEffect } from "react"
import { GrClose } from "react-icons/gr"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Java from "../../assets/images/java.svg"
import Flutter from "../../assets/images/flutter.svg"
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
        filter: { relativePath: { regex: "images/project/FlightClub/" } }
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
                  <h1>Advanced uav</h1>
                  <div className="externals">
                    <a
                      href="https://github.com/ethanlee123/flightclub"
                      target="_blank"
                      rel="external noreferrer"
                    >
                      <FaGithub className="icon" />
                    </a>
                  </div>
                </div>
                <p>
                  Status: <ColoredText>ongoing</ColoredText> | Role:{" "}
                  <ColoredText>Mobile Developer</ColoredText>
                </p>
                <p>
                  06 / 2021 - present | <ColoredText>Personal</ColoredText>
                </p>
              </ProjectMeta>
              <ProjectVision>
                <h2>Vision</h2>
                <p>
                  Autonomous delivery of health care and medical supplies to
                  those in need.
                </p>
                <p>
                  This UAV can fly autonomously to a waypoint specified by the
                  user drop off location. It has a payload capacity of 4.9 lbs
                  but can easily be increased by spending more cash!
                </p>
              </ProjectVision>
              <ProjectFeatures>
                <h2>Features</h2>
                <ul>
                  <li>UI built with Flutter, designed with Figma.</li>
                  <li>Communication with the backend is supported by Flask.</li>
                  <li>
                    Utilizes SSH to communicate with companion computer,
                    Raspberry Pi 3 model b+.
                  </li>
                  <li>Python script automates the drone flying process.</li>
                  <li></li>
                </ul>
                <h2>How does it work?</h2>
                <ul>
                  <li>
                    The user can browse and select from a variety of exclusive
                    products in our shop tab.
                  </li>
                  <li>
                    After confirming through the checkout process, an api
                    request is made that will arm and prepare the drone for
                    takeoff.
                  </li>
                  <li>
                    Coodinates are passed to the RPI which are fed to a python
                    script that will navigate the drone.
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
                  <Java className="java" />
                  <Flutter className="flutter" />
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
