/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Header, HdrTitle } from '../Header'
import { Footer } from '../Footer'
import { AbilityProp, AbilityContent } from './AbilityContent'
import router from '/img/router.jpg'
import homertx from '/img/homeRTX.drawio.svg'
import server from '/img/server.jpg'

export const Ability = () => {
  const jisaba: AbilityProp = {
    title: "このページを自鯖でホストできる",
    description: "少なくともそれくらいのネットワークとサーバとWebの知識がある。また、ネットワーク構成図を描いて管理できる",
    img: [
      ["ルータ", router],
      ["ネットワーク構成図", homertx],
      ["サーバ", server]
    ]
  }

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
        <AbilityContent {...jisaba} />
      </div>
    </div>
    <Footer />
    </>
  )
}