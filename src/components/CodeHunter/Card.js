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

const AdvancedUavCard = () => {
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
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          whileDrag={{ cursor: "grabbing" }}
          className="off-white"
        >
          <TopContainer>
            <CircleWrapper>
              <Circle>
                <StaticImage
                  className="circle-image"
                  src="..\..\assets\images\project\background\map.jpg"
                  alt="Maps background image"
                />
              </Circle>
            </CircleWrapper>
            <CardIconWrapper>
              <CardIcon
                style={{ x, y, rotateX, rotateY, rotate: "0deg", z: 10000 }}
                drag
                dragElastic={0.12}
              >
                <StaticImage
                  className="icon"
                  src="../../assets/images/project/icon/qrcode.png"
                  alt="Drone icon"
                  width={200}
                />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle className="off-white">
              Code<ColoredText>Hunter</ColoredText>
            </CardTitle>
          </TopContainer>
          <BottomContainer>
            <CardDetailsContainer>
              <ProjectMeta className="off-white">
                <p>
                  Status: <ColoredText>Complete</ColoredText> | Role:
                  <ColoredText> PM/Full Stack</ColoredText>
                </p>
                <p>04/2021 - 05/2021 | Academic</p>
              </ProjectMeta>

              <ProjectVision>
                After being hit hard by the pandemic, our objective is to boost
                Vancouver's economy by increasing foot traffic around local
                businesses through means of a scavenger hunt.
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

export default AdvancedUavCard
