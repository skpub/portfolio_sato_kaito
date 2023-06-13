/** @jsxImportSource @emotion/react */
import { useState, useEffect, useCallback } from 'react'
import { css } from '@emotion/react'
import './App.css'
import Header from './Header'
import kaito from '/img/stand.png'
import tongking from '/img/TONGKING2.png'

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
        /* position: relative; */
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
          @media screen and (max-width: 700px) {
            object-position: 0px 0px;
          }
          object-position: 0px -${(window.innerWidth*2-window.innerHeight)*(scrollPoint/window.innerHeight)}px;
        `} src={kaito} alt="" />

        <div css={closeHeader}>
          <Header scrollPoint={document.documentElement.clientWidth} />
        </div>

        <div id="Wrapper" css={css`
          position: absolute;
          top: 100vh;
          height: 100vh;
          left: 0;
          right: 0;
          margin: 0;
          margin-left: 10px;
          margin-right: 10px;
        `}>
          <img css={css`
            width: 100%;
          `}src={tongking} alt="" />
        </div>
      </div>
    </>
  )
}


export default App
