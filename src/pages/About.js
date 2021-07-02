import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const About = () => {
  return (
    <AboutStyle id="about">
      <h1 className="heading">
        <span className="heading">about</span> me
      </h1>
      <section className="left">
        <p className="text">
          <span>Hi, my name is Ethan</span> and I enjoy combining my skills as a
          software developer with fields such as finance, automotive, and
          medicine.
        </p>
      </section>
      <section className="middle">
        <p className="text">
          <span>Currently, I’m a co-op student</span> with a passion for
          entrepreneurship and technology at BCIT’s computer systems technology program. I’m
          looking forward to specializing in cloud computing, AI/ML, or
          predictive analytics.
        </p>
      </section>

      <div className="image-container">
        <StaticImage
          className="hiking"
          src="../assets/images/hiking.jpeg"
          alt="hiking"
        />
      </div>

      <div className="image-container">
        <StaticImage
          className="profile"
          src="../assets/images/profile-pic.jpeg"
          alt="profile picture"
        />
      </div>
      <section className="right">
        <p className="text">
          <span>My interest in software</span> started when I was
          searching for a competitive edge in the markets through algorithmic
          trading. During this time, I quickly developed curiousities in other
          fields and realized the potential to drive innovation with the help of
          technology.
        </p>
      </section>
    </AboutStyle>
  )
}

const AboutStyle = styled.section`
  height: 100vh;
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > section {
    flex: 1 1 50%;
  }
  div,
  h1 {
    flex: 1 2 auto;
  }
  > :nth-child(odd) {
    margin-right: 5%;
  }
  .heading,
  span {
    color: #6096ba;
  }
  .image-container {
    width: clamp(200px, 40%, 500px);
  }
  .profile,
  .hiking {
    width: clamp(200px, 60%, 500px);
  }
  .image {
    border-left: 15px solid #92bfb1;
    border-top: 15px solid #92bfb1;
    border-bottom: 15px solid #424c54;
    border-right: 15px solid #424c54;
  }
  .text {
    span {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 640px) {
    height: 150vh;
    margin-bottom: 10vh;
    .heading {
      text-align: center;
    }
    .image-container {
      margin: 0;
      display: flex;
    }
    > section,
    > div {
      margin-bottom: 20px !important;
    }
  }
  @media screen and (min-width: 1008px) {
  }
`

export default About
