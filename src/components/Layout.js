import React from "react"
import { Helmet } from "react-helmet"

import { GlobalStyle } from "../styles/GlobalStyle"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

// Layout component is for components you want to share site wide
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <GlobalStyle />

      <Helmet>
        <meta charSet="utf-8" />
        <title>EL | Portfolio</title>
        <meta name="author" content="Ethan Lee"></meta>
        <meta name="description" content="web portfolio of Ethan Lee"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <Header />
      <MainContent className="content">{children}</MainContent>

      <Footer />
    </div>
  )
}

const MainContent = styled.div``
export default Layout
