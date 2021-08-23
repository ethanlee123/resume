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
    <SkillsStyle id='skills'>
      <Swiper
        spaceBetween={50}
      >
        <SwiperSlide className="slide skills" key="skills">
          <h1 className="heading">My <span>Skills</span></h1>
          {/* <h4>Proficiency</h4> */}

          {/* <div className="rectangle"></div> */}

          <div className="programming-left">
            <Java className="java" />
            <Flutter className="flutter" />
            <Javascript className="javascript" />
            <MySQL className="mysql" />
            <Firebase className="firebase" />
            <MongoDb className="mongodb" />
            <Python className="python" />
          </div>
          <div className="programming-right">
            <Html5 className="html5" />
            <Css3 className="css3" />
            <ReactIcon className="react-icon" />
            <ExpressJs className="expressjs" />
            <NodeJs className="nodejs" />
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
      "myskills myskills myskills" 10%
      "proficiency proficiency proficiency" 10%
      "programmingleft rectangle programmingright" 80%
      / 40% 10% 40%;
    justify-content: center;
    justify-items: center;
    align-items: center;
    h1 {
      grid-area: myskills;
      color: #fff;
    }
    h4 {
      grid-area: proficiency;
      color: #fff;
      opacity: 0.5;
    }
    /* .rectangle {
      grid-area: rectangle;
      transform: rotate(90deg);
      width: 25vh;
      display: flex;
      align-self: flex-start;
      position: relative;
      top: 35%;
    } */
    .programming-left {
      text-align: right;
      grid-area: programmingleft;
    }
    .programming-right {
      grid-area: programmingright;
    }
    .programming-left,
    .programming-right {
      height: 100%;
      overflow-y: scroll;
      scrollbar-width: none; /* for Firefox */
      ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
    }
  }

  .text {
    text-align: center;
  }
  .css3,
  .javascript {
    height: 50px;
    width: 50px;
  }
  .pandas {
    height: 70px;
    width: 100px;
  }
  .mysql {
    width: 100px;
  }
  .expressjs, .html5, .css3, .python {
    fill: #EBEBEB;
  }
`

export default Skills
