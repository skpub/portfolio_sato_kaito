/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Header, HdrTitle } from '../Header'
import { Footer } from '../Footer'

export const Ability = () => {
  const hdr_title: HdrTitle = {
    title: "戻る",
    link: "/"
  }
  return (
    <>
    <div css={css`
      flex-grow: 1;
    `}>
      <Header {...hdr_title} />
      <div css={css`
        padding-top: 24px;
      `}>
        <h1 css={css`
          font-family: "Zen Maru Gothic";
          margin: 0;
          color: var(--blueblack);
          padding-top:24px;
        `}>できること</h1>
      </div>
    </div>
    <Footer />
    </>
  )
}