import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterStyle>
      <p>Website and design by Ethan Lee.</p>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  height: 10vh;
  text-align: center;
`

export default Footer
