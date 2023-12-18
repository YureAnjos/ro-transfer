import { Outlet } from "react-router-dom"
import { styled } from 'styled-components'
import Header from "./components/Header/Header"

const Container = styled.main`
  height: 100%; // 100%
  width: 1200px;
  margin: 0 auto;
`

function App() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  )
}

export default App
