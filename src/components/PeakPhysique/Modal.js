import React, {useEffect} from "react"
import { GrClose } from "react-icons/gr"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import JavaScript from "../../assets/images/javascript.svg"
import Html5 from "../../assets/images/html5.svg"
import Css3 from "../../assets/images/css3.svg"
import Firebase from "../../assets/images/firebase.svg"
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

  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.querySelector('html')
      showModal ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible')
    }

  }, [showModal])
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { regex: "images/project/PeakPhysique/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 10
              width: 200
            )
          }
        }
      }
    }
  `)

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
                  <h1>Peak Physique</h1>
                  <div className="externals">
                    <a
                      href="https://github.com/ethanlee123/peakphysique.git"
                      target="_blank"
                      rel="external noreferrer"
                    >
                      <FaGithub className="icon" />
                    </a>
                    <a
                      href="https://peak-physique-a0c48.web.app/"
                      target="_blank"
                      rel="external noreferrer"
                    >
                      <FaExternalLinkAlt className="icon" />
                    </a>
                  </div>
                </div>
                <p>
                  Status: <ColoredText>complete</ColoredText> | Role:{" "}
                  <ColoredText>Project Manager/Front End Developer</ColoredText>
                </p>
                <p>
                  01 / 2021 - 04 / 2021 | <ColoredText>Academic</ColoredText>
                </p>
              </ProjectMeta>
              <ProjectVision>
                <h2>Vision</h2>
                <p>
                  By leveraging an Uber-like business model, we seek to connect
                  fitness professionals with telecommuters (teleworkers).
                </p>
              </ProjectVision>
              <ProjectFeatures>
                <h2>Features</h2>
                <ul>
                  <li>Ability to customize your user profile upon sign up.</li>
                  <li>
                    Select from a variety of filter to find the right trainer.
                  </li>
                  <li>
                    Dynamically generate available dates to book an appointment.
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
                  <JavaScript className="javascript" />
                  <Html5 className="html5" />
                  <Css3 className="css3" />
                  <Firebase className="firebase" />
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
