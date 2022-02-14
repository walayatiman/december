import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Toggled = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
`
const StyledLink = styled(Link)`
  font-size: 65px;
  margin-bottom: 2rem;
  text-decoration: none;
`
const ToggleMenu = () => {
  return (
    <>
      <Toggled>
        <StyledLink to="#">About</StyledLink>
        <StyledLink to="#">Work</StyledLink>
        <StyledLink to="#">Services</StyledLink>
        <StyledLink to="#">Careers</StyledLink>
      </Toggled>
    </>
  )
}

export default ToggleMenu
