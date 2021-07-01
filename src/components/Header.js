import React, { useState, useEffect, useCallback } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { slide as Menu } from "react-burger-menu"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import NavLinks from "./NavLinks"
import ResumeButton from "./ResumeButton"
import SocialMedia from "./SocialMedia"

import styled from "styled-components"

const Header = () => {
  // Check if window is defined (so if in the browser or in node.js)
  const isBrowser = typeof window !== "undefined"

  const [isOpen, setOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState()

  const controlHeader = useCallback(() => {
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollPos > currentScrollPos
    setPrevScrollPos(currentScrollPos)
    setShowHeader(visible)
  }, [prevScrollPos])

  useEffect(() => {
    if (isBrowser) {
      setPrevScrollPos(window.pageYOffset)
    }
    window.addEventListener("scroll", controlHeader)
    return () => {
      window.removeEventListener("scroll", controlHeader)
    }
  }, [controlHeader])

  const handleOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <>
      {showHeader && (
        <Nav>
          <div className="navContents">
            <AnchorLink to="/" className="logo" title="Home">
              EL
            </AnchorLink>

            {/* Mobile layout menu */}
            <MobileNav className="mobile-nav">
              <Menu
                right
                width={"50%"}
                isOpen={isOpen}
                onOpen={handleOpen}
                onClose={handleOpen}
                customBurgerIcon={<FaBars />}
                customCrossIcon={<FaTimes />}
              >
                <div>
                  <AnchorLink
                    to="/"
                    className="logo"
                    title="Home"
                    onAnchorLinkClick={closeSideBar}
                  >
                    EL
                  </AnchorLink>
                </div>
                <NavLinks closeSideBar={closeSideBar} />

                <ResumeButton />

                <SocialMedia />
              </Menu>
            </MobileNav>

            {/* Desktop layout menu */}
            <FullNav className="full-nav">
              <NavLinks />
            </FullNav>

            {/* Desktop resume button */}
            <div className="resume-btn-container">
              <ResumeButton />
            </div>
          </div>
        </Nav>
      )}
    </>
  )
}

const Nav = styled.nav`
  z-index: 9999;
  width: 100%;
  background-color: #ebebeb;
  position: fixed;
  top: 0;
  .hide-nav {
    display: none !important;
  }
  .navContents {
    height: 80px;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    @media screen and (min-width: 641px) {
      grid-template-columns: 1fr 2fr 1fr;
      .mobile-nav {
        display: none;
      }
    }

    @media screen and (max-width: 640px) {
      display: flex;
      justify-content: space-between;
      margin: 0 10%;
      .full-nav,
      .resume-btn-container {
        display: none;
      }
    }
    .logo {
      text-decoration: none;
      z-index: 99999;
      border: 2px solid #000;
      padding: 15px;
      height: 70%;
      -webkit-box-shadow: 3px 3px 5px 1px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
      -moz-box-shadow: 3px 3px 5px 1px #ccc; /* Firefox 3.5 - 3.6 */
      box-shadow: 3px 3px 5px 1px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
      font-weight: 800;
    }
  }
`

const MobileNav = styled.div`
  display: none;
  // burger icon
  .bm-burger-button,
  #react-burger-menu-btn {
    position: relative;
    width: 30px !important;
    height: 30px !important;
    #react-burger-menu-btn {
      z-index: 999999 !important;
    }
  }
  /* styling of overlay */
  .bm-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .bm-menu-wrap {
    position: absolute;
    top: 0;
    right: 0;
  }
  .nav-items {
    text-align: center;
  }
  // hovering over burger icon
  .bm-burger-bars-hover {
    background: #b39682;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 36px;
    width: 36px;
  }

  /* General sidebar styles */
  .bm-menu {
    background-color: #ebebeb;
    padding-top: 3em;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    .bm-item-list {
      width: 100%;
      div {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;
      }
      a {
        color: #000;
        margin: 1.5rem 0;
        :hover {
          color: #904e55;
        }
      }
      .icon-links {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
  @media screen and (max-width: 640px) {
    display: block;
  }
`
const FullNav = styled.div``

export default Header
