/** @jsxImportSource @emotion/react */
import { useState, useEffect, useCallback } from 'react'
import { css } from '@emotion/react'
import { ScrollRestoration, useNavigate } from 'react-router-dom'
import './App.css'
import { Header, HdrTitle } from './Header'
import { Content, ContentProps } from './Content'
import kaito from '/img/stand.png'
import tongking from '/img/TONGKING2.png'
import keireki from '/img/keireki2.jpg'

export const Home = () => {
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

  const closeHeader = css``

  const Title = css`
    padding: 100%;  
  `

  const navigate = useNavigate()

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

  const hdr_title: HdrTitle = {
    title: "佐藤 海音 / Sato Kaito",
    link: "",
  }

  return (
    <>
      <div id="BackGround" css={css`
        /* position: relative; */
        /* background: url({kaito}) no-repeat; */
        /* background-size: cover; */
        background: var(--mybeige);
        background-attachment: fixed;
        /* background: linear-gradient(0deg, var(--blueblack), 2%, var(--mybeige)); */
      `}>
        <img css={css`
          padding-top: 24px;
          width: 100vw;
          height: 100vh;
          /* filter: brightness(130%); */
          filter: sepia(20%);

          background-attachment: fixed;
          object-fit: cover;
          @media screen and (max-width: 600px) {
            object-position: 0px 0px;
          }
          object-position: 0px -${(window.innerWidth * 2 - window.innerHeight) * (scrollPoint / window.innerHeight)}px;
        `} src={kaito} alt="" />

        <div css={closeHeader}>
          <Header {...hdr_title} />
        </div>

        <div id="Wrapper" css={css`
          background: var(--mywhite);
          position: absolute;
          top: 100vh;
          left: 0;
          right: 0;
          margin: 0;
          /* margin-left: 10px;
          margin-right: 10px; */
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
          </ul>
        </div>
      </div>
    </>
  )
}