/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'
import { getAge, Birthday } from './birthday.ts'
import { useNavigate } from 'react-router-dom'

export type HdrTitle = {
  title: string,
  link: string,
}

export const Header = (props: HdrTitle) => {
  const navigate = useNavigate()
  return (
    <><div css={css`
      background: var(--mywhite);
      display: flex;
      /* position: absolute; */
      z-index: 1;
      position: fixed;
      top: 0px;
      right: 0px;
      color: var(--blueblack);
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100vw;
    `}>
      <div id="Header-left" css={css`
      `}>
        <p css={css`
          font-family: 'Shippori Mincho', serif;
          font-size: 24px;
          margin: 5px;
          padding-left: 30px;
          @media screen and (max-width: 520px) {
            padding-left: 15px;
            font-size: 4vw;
          }
          &:hover {
            opacity: 80%;
          }
        `} onClick={() => navigate(props.link)}>{props.title}</p>
      </div>
      <div id="Header-right" css={css`
        display: flex;
        width: 200px;
        margin: 0 0 0 auto;
        font-size: 24px;
        a {
          margin: auto;
          * {
            padding: 0;
            margin: 0;
          }
          color: var(--blueblack);
        }
        @media screen and (max-width: 520px) {
          width: 36vw;
          a {
            font-size: 4vw;
          }
        }
      `}>
        <a href="https://github.com/skpub" target="_blank" css={css`
        `}>
          <FaGithub css={css`
          `} />
        </a>
        <a href="https://twitter.com/OMGR_dearinsu" target="_blank" css={css`
        `}>
          <FaTwitter css={css`
          `} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100085236288723" target="_blank" css={css`display: block;
        `}>
          <FaFacebook css={css`
          `} />
        </a>
      </div>
    </div>
    </>
  )
}


export default Header;
