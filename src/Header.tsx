/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class Header extends React.Component {
  render() {
    return (
      <div css={css`
        display: flex;
        position: absolute;
        top: 0px;
        right: 0px;
        color: #303045;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100vw;
      `}>
        <div id="Header-left" css={css`
          padding-left: 10px;
          font-family: 'Shippori Mincho', serif;
          font-size: 24px;
          padding: 0;
          p {
            margin: 0;
            padding-left: 10px;
          }
        `}>
          <p>Portfolio</p>
        </div>
        <div id="Header-right" css={css`
          display: flex;
          width: 200px;
          margin: 0 0 0 auto;
          font-size: 18px;
          a {
            color: #303045;
          }
        `}>
          <a href="https://github.com/skpub" css={css`
            display: block;
            margin-right: auto;
            margin-left: auto;
          `}>
            <FaGithub css={css`
              /* color: #171515; */
              padding: 10px;
            `} />
          </a>
          <a href="https://twitter.com/OMGR_dearinsu" css={css`
            display: block;
            margin-right: auto;
            margin-left: auto;
          `}>
            <FaTwitter css={css`
              /* color: #1da1f2; */
              padding: 10px;
            `} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085236288723" css={
            css`display: block;
            margin-right: auto;
            margin-left: auto;
          `}>
            <FaFacebook css={css`
              /* color: #3B5998; */
              padding: 10px;
            `} />
          </a>
        </div>
      </div>
    )
  }
}
