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
          dragElastic={0.25}
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
                  src="../../assets/images/project/background/casino.jpg"
                  alt="Casino table background image"
                />
              </Circle>
            </CircleWrapper>
            <CardIconWrapper>
              <CardIcon
                style={{ x, y, rotateX, rotateY, rotate: "0deg", z: 10000 }}
                drag
                dragElastic={0.25}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                {/* dice image used: https://www.freeiconspng.com/img/27643 */}
                <StaticImage
                  className="icon"
                  src="../../assets/images/project/icon/dice.png"
                  alt="Dice icon"
                />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle className="off-white">
              Monte<ColoredText>Carlo</ColoredText>
            </CardTitle>
          </TopContainer>
          <BottomContainer>
            <CardDetailsContainer>
              <ProjectMeta className="off-white">
                <p>
                  Status: <ColoredText>Complete</ColoredText> | Role:
                  <ColoredText> Data Science</ColoredText>
                </p>
                <p>01/2020 - 01/2020 | Personal</p>
              </ProjectMeta>

              <ProjectVision>
                Calculates the optimal stock portfolio weights for a given time
                based on the Sharpe ratio derived from historical data.
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
