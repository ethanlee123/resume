import styled from "styled-components"
import { motion } from "framer-motion"

export const CardStyleWrapper = styled.div`
  width: 310px;
  height: 520px;
  perspective: 2000;
  /* Eggshell white background color for card */
  .off-white {
    background-color: #F0EAD6 !important;
    color: #000 !important;
  }
`
export const CardStyle = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
  margin: 0 auto;

`
export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`
export const Circle = styled.div`
  .circle-image {
    position: absolute;
    width: 350px;
    height: 350px;
    top: -4.2em;
    right: -10em;
    z-index: 5;
    /* background-color: #fbbe01; */
    border-radius: 50%;
  }
`
export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`
export const CardTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
`
export const CardIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardIcon = styled(motion.div)`
  width: auto;
  height: 200px;
  z-index: 99;
  user-select: none;

  .icon {
    width: 100%;
    height: 100%;
  }
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  padding: 0 1em;
`
export const CardDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  p {
    margin-bottom: 5px;
  }
`
export const ProjectVision = styled.p`
  margin-top: 10px;
`
export const SeeDetails = styled.button`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #904e55;
`
export const ColoredText = styled.span`
  color: #4f9275;
`