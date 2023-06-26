/** @jsxImportSource @emotion/react */
import { useState, useEffect, useCallback } from 'react'
import { css } from '@emotion/react'
import './App.css'
import { Header, HdrTitle } from './Header'
import { Footer } from './Footer'
import { Content, ContentProps } from './Content'
import kaito from '/img/stand.png'
import tongking from '/img/TONGKING2.png'
import keireki from '/img/keireki2.jpg'
import souda from '/img/souda.svg'
import router from '/img/router.jpg'

export const Home = () => {
  const [scrollPoint, setScrollPoint] = useState<number>(0)

  const handleScrolling = useCallback(() => {
    if (window.pageYOffset >= 0) {
      setScrollPoint(window.pageYOffset)
    }
  }, [])

  useEffect(() => {
    addEventListener('scroll', handleScrolling)
  }, [handleScrolling])

  const achivement: ContentProps = {
    title: "成果物",
    img: tongking,
    link: "/achivement"
  }

  const career: ContentProps = {
    title: "経歴・資格",
    img: keireki,
    link: "/career"
  }
  
  const ability: ContentProps = {
    title: "できること",
    img: router,
    link: "/ability"
  }

  const hdr_title: HdrTitle = {
    title: "佐藤 海音 / Sato Kaito",
    link: "",
  }

  return (
    <>
      <div id="BackGround" css={css`
        background: var(--mybeige);
        background-attachment: fixed;
        height: 100vh;
      `}>
        <img css={css`
          width: 100vw;
          height: 100vh;
          filter: sepia(20%);

          background-attachment: fixed;
          object-fit: cover;
          @media screen and (max-width: 600px) {
            object-position: 0px 0px;
          }
          object-position: 0px -${(window.innerWidth * 2 - window.innerHeight) * (scrollPoint / window.innerHeight)}px;
        `} src={kaito} alt="" />
        <div css={css`
          position: absolute;
          top: 0;
          padding-top: 10vh;
          padding-right: 10vw;
          right: 0;
          height: 80vh;
          width: 50vw;
        `}>
          <img src={souda} alt="" css={css`
            
            filter: drop-shadow(3px 3px 0px var(--mybeige));
            object-position: right top;
            object-fit: contain;
            width: 100%;
            height: 100%;
          `}/>
        </div>
      </div>

      <Header {...hdr_title} />

      <div id="Wrapper" css={css`
        background: var(--mywhite);
      `}>
        <h2 css={css`
          font-size: 32px;
          padding: 18px;
          margin: 0;
          color: var(--mywhite);
          background: var(--blueblack);
          font-family: 'Zen Maru Gothic';
        `}>Contents</h2>
        <ul css={css`
          margin-left: 10px;
          margin-right: 10px;
          padding: 0;
          list-style: none;
          display: flex;
          font-family: 'Zen Maru Gothic', serif;
          color: var(--blueblack);
          @media screen and (max-width: 520px) {
            flex-flow: column;
          }
        `}>
          <Content {...achivement} />
          <Content {...career} />
          <Content {...ability} />
        </ul>
      </div>
      <Footer />
    </>
  )
}