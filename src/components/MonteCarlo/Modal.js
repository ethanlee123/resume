import React, {useEffect} from "react"
import { GrClose } from "react-icons/gr"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Python from "../../assets/images/python.svg"
import Pandas from "../../assets/images/pandas.svg"
import Matplotlib from "../../assets/images/matplotlib.svg"

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

  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.querySelector('html')
      showModal ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible')
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
                  <h1>MonteCarlo Simulation</h1>
                  <div className="externals">
                    <FaGithub className="icon icon-disabled" />

                    <FaExternalLinkAlt className="icon icon-disabled" />
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
                  Calculates the optimal stock portfolio weights of a select
                  stocks for a given time based on the Sharpe ratio derived from
                  historical data.
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
                </ul>
              </ProjectFeatures>
              <ProjectViewables>
                <p>Photos coming soon...</p>
              </ProjectViewables>
              <ProjectTechnologies>
                <h2>Technologies</h2>
                <div className="icons">
                  <Python className="python" />
                  <Pandas className="pandas" />
                  <Matplotlib className="matplotlib" />
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
