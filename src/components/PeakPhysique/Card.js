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
          className=""
        >
          <TopContainer>
            <CircleWrapper>
              <Circle>
                {/* https://unsplash.com/photos/WvDYdXDzkhs */}
                <StaticImage
                  className="circle-image"
                  src="../../assets/images/project/background/deadlift.jpg"
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
                {/* https://www.stickpng.com/img/sports/yoga/yoga-exercise */}
                <StaticImage
                  className="icon"
                  src="../../assets/images/project/icon/yogapose.png"
                  alt="Difficult yoga pose"
                  height={200}
                />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle className="">
              Peak<ColoredText> Physique</ColoredText>
            </CardTitle>
          </TopContainer>
          <BottomContainer>
            <CardDetailsContainer>
              <ProjectMeta className="">
                <p>
                  Status: <ColoredText>Complete</ColoredText> | Role:
                  <ColoredText> PM/Front End</ColoredText>
                </p>
                <p>01 / 2021 - 04 / 2021 | Academic</p>
              </ProjectMeta>

              <ProjectVision>
                By leveraging an Uber-like business model, we seek to connect
                fitness professionals with telecommuters (teleworkers).
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
