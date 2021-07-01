import React from 'react'

import SocialMedia from '../components/SocialMedia'
import styled from "styled-components"

const Contact = () => {
  return (
    <ContactStyle>
    <h1 id="contact" className='heading'>Get in touch!</h1>
    <p className="text">
      I am actively looking for opportunities in the tech industry. Feel
      free to connect with me if you have any questions or just want to say
      hi.
    </p>
    <SocialMedia />
  </ContactStyle>
  )
}

const ContactStyle = styled.section`
  #contact {
    color: #000;
  }
  height: 50vh;
  width: 45vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin-bottom: 20px;
  }
`

export default Contact