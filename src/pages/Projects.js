import React from "react"

import styled from "styled-components"

import AdvancedUavCard from "../components/AdvancedUav/Card"
import CodeHunterCard from "../components/CodeHunter/Card"
import PeakPhysiqueCard from "../components/PeakPhysique/Card"
import MonteCarloCard from "../components/MonteCarlo/Card"

const Projects = () => {
  return (
    <ProjectsStyle id="projects">
      <h1 className="heading">Projects</h1>
      <CardsContainer>
        <AdvancedUavCard />
        <CodeHunterCard />
        <PeakPhysiqueCard />
        <MonteCarloCard />
      </CardsContainer>
    </ProjectsStyle>
  )
}

const CardsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ProjectsStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .heading {
    color: #4f9275;
    margin-top: 5%;
  }
`

export default Projects
