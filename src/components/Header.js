import React, { useState } from "react"
import DarkMode from "../DarkMode"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "./GlobalStyles"
import ToggleMenu from "./ToggleMenu"

const Container = styled.div`
  width: 100%;
  background-color: transparent;
`

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  justify-content: space-between;
`

const MobileMenu = styled.div`
  width: 600px;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: green;
  transition: transform 330ms ease-in-out;
  cursor: auto;

  button {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 0;
    background: transparent;
    border: none;
    right: 5vw;
    top: 10vh;
    cursor: pointer;
    position: absolute;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`

const BurgerLine = styled.path`
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #fff;
  stroke-width: 5.5;
  stroke-linecap: round;

  &:first-child {
    stroke-dasharray: 40 139;
  }

  &:last-child {
    stroke-dasharray: 40 180;
  }
`

const Burger = styled.svg`
  width: 50px;
  height: 50px;
  position: relative;
  display: block;
`

const SidemenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  section {
    display: flex;
    align-items: center;
  }
  ${MobileMenu} {
    transform: ${props =>
      props.className === "open" ? "translateX(0%)" : "translateX(100%)"};
  }

  &:hover ${BurgerLine} {
    &:first-child {
      stroke-dashoffset: -102px;
    }

    &:last-child {
      stroke-dashoffset: -102px;
    }
  }
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
`

// https://www.mostlyserious.io/

const Header = () => {
  const [isActive, setActive] = useState("false")
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <Container>
      <Wrapper>
        <StaticImage
          src="../images/logo.svg"
          alt="logo"
          placeholder="blurred"
          layout="fixed"
          width={200}
        />
        <RightSide>
          <DarkMode />
          <SidemenuContainer className={isActive ? "closed" : "open"}>
            <section onClick={handleToggle}>
              <Burger viewBox="0 0 100 100" width="80">
                <BurgerLine
                  class="line top"
                  d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
                ></BurgerLine>
                <BurgerLine class="line middle" d="m 30,50 h 40"></BurgerLine>
                <BurgerLine
                  class="line bottom"
                  d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
                ></BurgerLine>
              </Burger>
              <span> Menu</span>
            </section>

            <MobileMenu>
              <button onClick={handleToggle}>
                <svg>
                  <path
                    fill="currentcolor"
                    d="M14.539 1.543c-.397-.378-1.024-.397-1.394-.028L9 5.663 4.855 1.515c-.374-.374-1.013-.349-1.409.043l-.082.092c-.32.395-.328.964.033 1.325L7.54 7.121l-4.15 4.154c-.375.376-.349 1.018.046 1.413.396.396 1.037.422 1.413.047L9 8.58l4.151 4.155c.374.374 1.013.349 1.409-.043l.082-.091c.318-.397.316-.977-.032-1.326l-4.151-4.154 4.144-4.146c.388-.388.35-1.018-.046-1.413l-.018-.019zM3.378 17.375c-.633 0-1.128-.48-1.128-1.063 0-.582.516-1.062 1.128-1.062h11.244c.612 0 1.128.48 1.128 1.062 0 .583-.516 1.063-1.128 1.063H3.378z"
                  ></path>
                </svg>
                <span>Close</span>
              </button>
              {/* <ToggleMenu /> */}
            </MobileMenu>
          </SidemenuContainer>
        </RightSide>
      </Wrapper>
    </Container>
  )
}

export default Header
