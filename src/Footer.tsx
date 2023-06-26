/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Footer = () => {
  return (
    <>
    <div css={css`
      height: 100px;
      background: #f0f0f0f0;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
    `}>
      <div css={css`
        height: 100px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        * {
          margin: 4px;
        }
      `}>
        <p>satodeyannsu@gmail.com</p>
        <p>©2023 佐藤 海音</p>
      </div>
    </div>
    </>
  )
}