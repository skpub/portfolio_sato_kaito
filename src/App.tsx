/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    document.getElementById("object")?.scrollIntoView({behavior: 'smooth'})
    // const scrollY = window.pageYOffset
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
  }, [isContentOpen])



  const Title=css`
    padding: 100%;  
  `
  const blueblack='#303045'

  return (
    <>
      <div id="Wrapper" css={css`
        position: relative;
        background: url({kaito}) no-repeat;
        background-size: cover;
      `}>
        <img css={css`
          width: 100vw;
          filter: brightness(140%);
        `} src={kaito} alt="" />

        <div css={css`
          display: flex;
          width: 100vw;
          color: ${blueblack};
          background: #303030;
          position: absolute;
          top: 0px;
          /* left: 55vw; */
          right: 0px;
          margin: auto;
          /* h1 {
            font-family: 'Shippori Mincho', serif;
            font-size: 6vw;
            margin: 0;
            padding: 0;
          } */
          p {
            font-size: 24px;
            color: white;
            margin: auto;
          }
          #Header-right {
            a {
              color: white;
            }
          }
        `}>
          <Header />
        </div>
      </div>
    </>
  )
}


export default App
