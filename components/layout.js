import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #232323;
    font-size: 16px;
    background-color: #f8f8f8;
    padding: 0;
    margin: 0;
    font-family: 'Source Serif Pro', serif;
  }

  * {
    box-sizing: border-box;
  }
`

export default function Layout({ children }) {
  return <><GlobalStyle/>{children}</>
}