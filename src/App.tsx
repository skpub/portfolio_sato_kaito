/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import './App.css'
import Header from './Header'
import kaito from '/img/stand.png'

function App() {
  const [isContentOpen, setIscontentOpen] = useState<Date>()

  const content = [<Header />, <Header />]

  const openContents = () => {
    setIscontentOpen(new Date())
  }

  const onScroll = () => {
    document.getElementById("object")?.scrollIntoView({ behavior: 'smooth' })
    // const scrollY = window.pageYOffset
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
  }, [isContentOpen])

  const Title = css`
    padding: 100%;  
  `
  const blueblack = '#303045'

  return (
    <>
      <div id="BackGround" css={css`
        position: relative;
        background: url({kaito}) no-repeat;
        background-size: cover;
      `}>
        <img css={css`
          width: 100vw;
          /* filter: brightness(130%); */
          filter: sepia(20%);
        `} src={kaito} alt="" />

        <Header />

        <div id="Wrapper" css={css`
          position: absolute;
          background-color: #ffffffa0;
          top: 30vh;
          left: 0;
          right: 0;
          margin: auto;
          margin-left: 10px;
          margin-right: 10px;
        `}>
        </div>
      </div>
    </>
  )
}


export default App
