import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import styled from "styled-components"

const SocialMedia = () => {
  return (
    <SocialMediaStyle className="icon-links">
      <a
        href="mailto:elee265@my.bcit.ca"
        className="email-icon"
        rel="noreferrer"
      >
        <MdEmail />
      </a>

      <a
        href="https://github.com/ethanlee123"
        target="_blank"
        className="github-icon"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/lee-123"
        target="_blank"
        className="linkedin-icon"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </SocialMediaStyle>
  )
}

const SocialMediaStyle = styled.div`
  font-size: 2rem;
  display: flex;
  * {
    fill: #904e55;
    transition: all 290ms ease-in-out;
    :hover {
      color: #904E55; 
    }
    :hover {
      fill: #fff;
    }
  }
  .email-icon,
  .github-icon {
    margin-right: 25px;
  }
  .email-icon {
    font-size: 35px;
  }
`

export default SocialMedia
