import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "styled-components"

const Label = styled.label`
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 300ms ease;
  background: ${props => (props.checked === "dark" ? "white" : "black")};
`

class DarkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <span />
          </Label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
