import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useMotionValue, useTransform } from "framer-motion"

import {
  CardStyleWrapper,
  CardStyle,
  CircleWrapper,
  Circle,
  TopContainer,
  CardTitle,
  CardIconWrapper,
  CardIcon,
  BottomContainer,
  CardDetailsContainer,
  ProjectMeta,
  ProjectVision,
  SeeDetails,
  ColoredText,
} from "../CardStyle"

import Modal from "./Modal"

const Card = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <CardStyleWrapper>
        <CardStyle
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.25}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileDrag={{ cursor: "grabbing" }}
        >
          <TopContainer>
            <CircleWrapper>
              <Circle>
                <StaticImage
                  className="circle-image"
                  src="../../assets/images/project/background/moutains.jpg"
                  alt="Mountains background image"
                />
              </Circle>
            </CircleWrapper>
            <CardIconWrapper>
              <CardIcon
                style={{ x, y, rotateX, rotateY, rotate: "-20deg", z: 10000 }}
                drag
                dragElastic={0.25}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <StaticImage
                  className="icon"
                  src="../../assets/images/project/icon/drone.png"
                  alt="Drone icon"
                />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle>
              advanced <ColoredText>uav</ColoredText>
            </CardTitle>
          </TopContainer>
          <BottomContainer>
            <CardDetailsContainer>
              <ProjectMeta>
                <p>
                  Status: <ColoredText>ongoing</ColoredText> | Role:
                  <ColoredText> Mobile Dev</ColoredText>
                </p>
                <p>06/2021 - Present | Personal</p>
              </ProjectMeta>

              <ProjectVision>
                Autonomous delivery of health care and medical supplies to those
                in need.
              </ProjectVision>
            </CardDetailsContainer>
            <SeeDetails className="button" onClick={openModal}>
              see details
            </SeeDetails>
          </BottomContainer>
        </CardStyle>
      </CardStyleWrapper>

      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </>
  )
}

export default Card
