import React, { useEffect, createRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import lottie from "lottie-web"
// Animation by Satyam Gajjar https://lottiefiles.com/64553-404-error
import errorAnimation from "../animations/error-animation.json"

const Error = () => {
  const errorAnimationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: errorAnimationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: errorAnimation,
    })
    return () => anim.destroy() // optional clean up for unmounting
  }, [errorAnimationContainer])

  return (
    <Background>
      <div>
        <AnimationContainer ref={errorAnimationContainer} />
        <ReturnHome to="/" className="button">
          <h1 className="heading">Oops! Click here to return home.</h1>
        </ReturnHome>
      </div>
    </Background>
  )
}

const Background = styled.div`
  background-color: #ebebeb;
  font-family: 'Exo 2', sans-serif;
  div {
    display: grid;
    grid-template-rows: 50% 50%;
    width: clamp(250px, 50vw, 800px);
    height: 100vh;
    margin: 0 auto;
  }
`

const AnimationContainer = styled.div`
height: 50vh;
`
const ReturnHome = styled(Link)`
  text-align: center;
  color: #904e55;
`

export default Error
