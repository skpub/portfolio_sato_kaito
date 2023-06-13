/** @jsxImportSource @emotion/react */
import { useState, useEffect, useCallback } from 'react'
import { css } from '@emotion/react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './Header'
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

  return (
    <>
      <div id="BackGround" css={css`
        /* position: relative; */
        /* background: url({kaito}) no-repeat; */
        /* background-size: cover; */
        background-attachment: fixed;
        /* background: linear-gradient(0deg, var(--blueblack), 2%, var(--mybeige)); */
      `}>
        <img css={css`
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
          <Header />
        </div>

        <div id="Wrapper" css={css`
          position: absolute;
          top: 100vh;
          left: 0;
          right: 0;
          margin: 0;
          /* margin-left: 10px;
          margin-right: 10px; */
        `}>
          <h1 css={css`
            padding: 24px;
            margin: 0;
            color: var(--mybeige);
            background: var(--blueblack);
            font-family: 'Zen Maru Gothic';
          `}>Content</h1>
          <ul css={css`
            margin-top: 48px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 0;
            list-style: none;
            display: flex;
            font-family: 'Zen Maru Gothic', serif;
            color: var(--blueblack);
            @media screen and (max-width: 700px) {
              flex-flow: column;
            }
          `}>
            <li css={css`
              flex: 1;
              margin: 10px;
            `}>
              <img onClick={() => navigate('achivement')} css={css`
                &:hover {
                  opacity: 80%;
                }  
                width: 100%;
              `} src={tongking} alt="" />
              <h2>成果物</h2>
            </li>
            <li css={css`
              flex: 1;
              margin: 10px;
            `}>
              <img onClick={() => navigate('career')}css={css`
                &:hover {
                  opacity: 80%;
                }  
                width: 100%;
              `} src={keireki} alt="" />
              <h2>経歴・資格</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}