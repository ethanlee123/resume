import React, {useEffect} from "react"
import { GrClose } from "react-icons/gr"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Expressjs from "../../assets/images/expressjs.svg"
import ReactIcon from "../../assets/images/reacticon.svg"
import Nodejs from "../../assets/images/nodejs.svg"
import MongoDb from "../../assets/images/mongodb.svg"
import Firebase from "../../assets/images/firebase.svg"
import Heroku from "../../assets/images/heroku.svg"
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
        filter: { relativePath: { regex: "images/project/CodeHunter/" } }
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
                  <h1>codehunter</h1>
                  <div className="externals">
                    <a
                      href="https://github.com/dm-gamboa/COMP-2800-Team-BBY-04.git"
                      target="_blank"
                      rel="external noreferrer"
                    >
                      <FaGithub className="icon" />
                    </a>
                    <a
                      href="https://code-hunter.vercel.app/"
                      target="_blank"
                      rel="external noreferrer"
                    >
                      <FaExternalLinkAlt className="icon" />
                    </a>
                  </div>
                </div>
                <p>
                  Status: <ColoredText>complete</ColoredText> | Role:{" "}
                  <ColoredText>Project Manager/Full Stack Dev (Group)</ColoredText>
                </p>
                <p>
                  04 / 2021 - 05 / 2021 | <ColoredText>Academic</ColoredText>
                </p>
              </ProjectMeta>
              <ProjectVision>
                <h2>Vision</h2>
                <p>
                  After being hit hard by the pandemic, our objective is to
                  boost Vancouver's economy by increasing foot traffic around
                  local businesses through means of a scavenger hunt.
                </p>
              </ProjectVision>
              <ProjectFeatures>
                <h2>Features</h2>
                <ul>
                  <li>View points of interests with hidden QR codes.</li>
                  <li>Scan valid QR codes to earn redeemable points.</li>
                  <li>
                    Redeem your points in our in-app shop for a variety of
                    rewards
                  </li>
                  <li>Add friends you meet along the way!</li>
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
                  <MongoDb className="mongodb" />
                  <Expressjs className="expressjs" />
                  <ReactIcon className="reacticon" />
                  <Nodejs className="nodejs" />
                  <Firebase className="firebase" />
                  <Heroku className="heroku" />
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
