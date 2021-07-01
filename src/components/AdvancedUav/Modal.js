import React from "react"
import { GrClose } from "react-icons/gr"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Java from "../../assets/images/java.svg"
import Flutter from "../../assets/images/flutter.svg"

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
                    <FaGithub className="icon icon-disabled" />
                    <FaExternalLinkAlt className="icon icon-disabled" />
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
              </ProjectVision>
              <ProjectFeatures>
                <h2>Features</h2>
                <ul>
                  <li>UI built with Flutter to interact with the UAV.</li>
                  <li>
                    Receive live updates of the UAV's location and status.
                  </li>
                  <li>Send packages to specified GPS coordinates.</li>
                </ul>
              </ProjectFeatures>
              <ProjectViewables>
                <p>Photos coming soon...</p>
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
