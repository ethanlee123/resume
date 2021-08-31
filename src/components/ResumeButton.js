import React from 'react'
import styled from "styled-components"
import resume from '../assets/resume/ethan_lee_online_resume.pdf'

const ResumeButton = () => {
  return (
    <ResumeBtnStyle>
      <a href={resume} target='_blank' rel='noreferrer'>
      <button className="resume button">RESUME</button>
      </a>
    </ResumeBtnStyle>
  )
}
const ResumeBtnStyle = styled.div`

`

export default ResumeButton