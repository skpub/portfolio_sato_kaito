/** @jsxImportSource @emotion/react */
import { useState, useEffect, useCallback } from 'react'
import { css } from '@emotion/react'
import './App.css'
import Header from './Header'
import kaito from '/img/stand.png'

function App() {
  const [scrollPoint, setScrollPoint] = useState<number>(0)
  const [current, setCurrent] = useState<number>(0)

  const handleScrolling = useCallback(() => {
    if (window.pageYOffset >= 0) {
      setScrollPoint(window.pageYOffset)
    }
  }, [])

  useEffect(() => {
    addEventListener('scroll', handleScrolling)
  }, [handleScrolling])

  const closeHeader = css``;

  const Title = css`
    padding: 100%;  
  `
  const blueblack = '#303045'

  return (
    <>
      <div id="BackGround" css={css`
        position: relative;
        /* background: url({kaito}) no-repeat; */
        /* background-size: cover; */
        background-attachment: fixed;
      `}>
        <img css={css`
          width: 100vw;
          height: 100vh;
          /* filter: brightness(130%); */
          filter: sepia(20%);

          background-attachment: fixed;
          object-fit: cover;
          object-position: 0px -${(window.innerWidth*2-window.innerHeight)*(scrollPoint/window.innerHeight)}px;

        `} src={kaito} alt="" />

        <div css={closeHeader}>
          <Header scrollPoint={document.documentElement.clientHeight} />
        </div>

        <div id="Wrapper" css={css`
          position: absolute;
          background-color: #303a5a;
          top: 100vh;
          height: 100vh;
          left: 0;
          right: 0;
          margin: 0;
          margin-left: 10px;
          margin-right: 10px;
        `}>
        </div>
      </div>
    </>
  )
}


export default App
