import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const UpcomingProjects = () => {
  return (
    <UpcomingProjectsStyle>
      <div className="carousel">
        <Swiper spaceBetween={50}>
          <SwiperSlide className="slide" key="upcoming">
            <div className="container">
              <div className="upcoming">
                <div>
                  <h1 className="heading">upcoming project.</h1>
                  <h3 className="subheading">Electric car conversion</h3>
                </div>
                <StaticImage
                  className="bg-electric"
                  src="../assets/images/electric.jpg"
                  alt="electric car charger"
                />
              </div>
              <div className="wip">
                <div>
                  <h1 className="heading">work in progress.</h1>
                  <h3 className="subheading">"Advanced UAV"</h3>
                </div>
                <StaticImage
                  className="advanced-uav"
                  src="../assets/images/upcoming/advanced-uav.jpg"
                  alt="drone"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </UpcomingProjectsStyle>
  )
}

const UpcomingProjectsStyle = styled.div`
  background-color: #000;
  color: #fff;
  .carousel {
    height: 100%;
    .swiper-container {
      height: 100%;
      .container {
        height: 100%;
      }
    }
  }
  @media screen and (min-width: 641px) {
    height: 50vh;
    .carousel {
      .swiper-container {
        .slide {
          .container {
            display: grid;
            grid-template-columns: 50% 50%;
            justify-items: center;
            align-items: center;
            .upcoming {
              .bg-electric {
                position: absolute;
                top: 0;
                left: -8px;
                width: 50vw;
                height: 50vh;
                z-index: -1;
                opacity: 0.5;
              }
            }
            .wip {
              .advanced-uav {
                position: absolute;
                top: 0;
                right: -8px;
                width: 50vw;
                height: 50vh;
                z-index: -1;
                opacity: 0.5;
              }
            }
            h3 {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    height: 70vh;
    .heading {
    }
    .container {
      display: grid;
      grid-template-rows: 50% 50%;
      .upcoming,
      .wip {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .upcoming {
        .bg-electric {
          position: absolute;
          top: 0;
          width: 100vw;
          height: 50%;
          z-index: -1;
          opacity: 0.5;
        }
      }
      .wip {
        .advanced-uav {
          position: absolute;
          bottom: 0;
          width: 100vw;
          height: 50%;
          z-index: -1;
          opacity: 0.5;
        }
      }
    }
  }
`

export default UpcomingProjects
