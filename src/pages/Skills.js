import React from "react"
import styled from "styled-components"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

import Java from "../assets/images/java.svg"
import Flutter from "../assets/images/flutter.svg"
import Javascript from "../assets/images/javascript.svg"
import Html5 from "../assets/images/html5.svg"
import Css3 from "../assets/images/css3.svg"
import MongoDb from "../assets/images/mongodb.svg"
import ExpressJs from "../assets/images/expressjs.svg"
import ReactIcon from "../assets/images/reacticon.svg"
import NodeJs from "../assets/images/nodejs.svg"
import MySQL from "../assets/images/mysql.svg"
import Firebase from "../assets/images/firebase.svg"
import Python from "../assets/images/python.svg"

const Skills = () => {
  return (
    <SkillsStyle id="skills">
      <Swiper spaceBetween={50}>
        <SwiperSlide className="slide skills" key="skills">
          <h1 className="working">I'm working with ...</h1>
          <div className="programming-left">
            <p>java</p>
            <p>flutter</p>
            <p>dart</p>
            <p>mysql</p>
            <p>firebase</p>
            <p>mongodb</p>
            <p>python</p>
          </div>
          <h1 className="worked">I've worked with ...</h1>
          <div className="programming-right">
            <p>javascript</p>
            <p>html 5</p>
            <p>css 3</p>
            <p>react</p>
            <p>expressjs</p>
            <p>nodejs</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </SkillsStyle>
  )
}

const SkillsStyle = styled.div`
  height: 50vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(235, 235, 235, 1) 100%
  );
  .skills {
    height: 45vh;
    display: grid;
    grid-template:
      "working worked" 10%
      "programmingleft programmingright" 80%
      / 50% 50%;
    justify-content: center;
    justify-items: center;
    align-items: center;
    .working {
      grid-area: working;
    }
    .worked {
      grid-area: worked;
    }
    h1 {
      color: #fff;
      @media screen and (max-width: 640px) {
        font-size: 12pt;
      }
    }
    h4 {
      grid-area: proficiency;
      color: #fff;
      opacity: 0.5;
    }
    .programming-left {
      text-align: center;
      grid-area: programmingleft;
    }
    .programming-right {
      text-align: center;
      grid-area: programmingright;
    }
    .programming-left,
    .programming-right {
      margin-top: 50px;
      height: 100%;
      overflow-y: scroll;
      scrollbar-width: none; /* for Firefox */
      ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
    }
    p {
      margin-top: 5%;
      color: #fff;
      font-size: 16pt;
    }
  }
`

export default Skills
