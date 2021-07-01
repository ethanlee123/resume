import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"


const NavLinks = ({ closeSideBar }) => {
  return (
    <Anchors>
      <AnchorLink id="about" className="nav-item" to="/#about" title="About" onAnchorLinkClick={closeSideBar}>
        About
      </AnchorLink>
      <AnchorLink
        id="projects"
        className="nav-item"
        to="/#projects"
        title="Projects"
        onAnchorLinkClick={closeSideBar}
      >
        Projects
      </AnchorLink>
      <AnchorLink
        id="contact"
        className="nav-item"
        to="/#contact"
        title="Contact"
        onAnchorLinkClick={closeSideBar}
      >
        Contact
      </AnchorLink>
    </Anchors>
  )
}

const Anchors = styled.div`
  .btn {
    display: none;
    @media screen and (max-width: 640px) {
      display: block;
    }
  }
  .nav-item {
    margin: 0 1rem;
    color: #000;
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    transition: all 290ms ease-in-out;
    :hover {
      color: #904E55; 
    }
  }
`

export default NavLinks
