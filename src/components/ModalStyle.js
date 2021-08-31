import styled from "styled-components"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`
export const ModalWrapper = styled.div`
  width: clamp(300px, 80vw, 750px);
  height: 83vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 25px;
  display: grid;
  grid-template-rows: 10% 90%;
  justify-content: center;
  background-color: #ebebeb;
  overflow: hidden;
  margin-top: 3rem;
`
export const ModalContent = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > * {
    margin-bottom: 20px;
  }
  overflow-y: scroll;
`
export const ProjectMeta = styled.section`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      font-size: 1.3rem;
      margin-right: 20px;
      fill: #904e55;
      :hover {
        fill: #fff;
      }
    }
  }
  h1 {
    font-size: 2rem;
    @media screen and (max-width: 640px) {
      font-size: 1.5rem;
    }
    text-transform: uppercase;
  }
  .icon-disabled {
    fill: #a1a1a1 !important;
  }
`
export const ProjectVision = styled.section``
export const ProjectFeatures = styled.section`
  ul {
    margin-bottom: 20px;
  }
`
export const ProjectViewables = styled.section`
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
`
export const ProjectTechnologies = styled.section`
  /* svg icons */
  .css3,
  .javascript {
    height: 50px;
    width: 50px;
  }
  .pandas,
  .matplotlib,
  .python {
    height: 70px;
    width: 120px;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    .java {
      width: 140px;
    }
  }
`
export const CloseModalIcon = styled.div`
  text-align: right;
  font-size: 24px;
  width: 95%;
  margin-top: 20px;
`
export const ColoredText = styled.span`
  color: #4f9275;
`
