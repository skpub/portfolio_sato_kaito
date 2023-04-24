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
          filter: brightness(130%);
        `} src={kaito} alt="" />

        <Header />

        <div id="Wrapper" css={css`
          position: absolute;
          top: 0px;
          right: 0px;
          margin: auto;
        `}>
        </div>
      </div>
    </>
  )
}


export default App
