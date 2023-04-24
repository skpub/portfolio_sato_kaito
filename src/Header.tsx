/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import arrow from '/img/arrow.svg'
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="Header-right" css={css`display: flex; background-color: blue; width: 200px; margin: 0 0 0 auto;`}>
          <a href="https://github.com/skpub" css={css`
            display: block;
            margin-right: auto;
            margin-left: auto;
          `}>
            <FaGithub css={css`
              font-size: 24px;
              /* color: #171515; */
              padding: 10px;
            `}/>
          </a>
          <a href="https://twitter.com/OMGR_dearinsu" css={css`
            display: block;
            margin-right: auto;
            margin-left: auto;
          `}>
            <FaTwitter css={css`
              font-size: 24px;
              /* color: #1da1f2; */
              padding: 10px;
            `}/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085236288723" css={
            css`display: block;
            margin-right: auto;
            margin-left: auto;
          `}>
            <FaFacebook css={css`
              font-size: 24px;
              /* color: #3B5998; */
              padding: 10px;
            `}/>
            </a>
        </div>
      </div>
    )
  }
}
