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
    description: [
      ["ネットワークの理解", [
        "OSI参照モデルに従って、各レイヤに対応したヘッダによって通信パケットが入れ子になっていることを理解している。",
        "L1ではRJ45やSFP+やQSFPなどのコネクタ規格が分かる。なんかSFP+は光ケーブルのトランシーバ(LR, SRの違いがある)を接続するということを知っている。RJ45だけは使ったことがある。また、RJ45のケーブルの結線の違いでクロスケーブルとストレートケーブルがあり、AutoMDI/MDI-X対応機器でない限り区別が必要であることを知っている。",
        "L2スイッチがMACアドレス(テーブル)を用いてスイッチングしていることが分かる。ポートベースVLANに加えて、タグVLANの概念と仕組み(イーサネットフレームのVLANタグ)が分かる。また、知識として802.1x認証やRADIUSサーバを知っている。",
        "L3スイッチやルータがネットワークやVLAN間のルーティングを処理できることが分かる。さらに、自分で構築したことはないが、ルータがAS間でEGPプロトコルとしてBGPなどが用いられていること、AS内でIGPプロトコルとしてOSPFなどが用いられていることが知識として分かる。また、ARP(テーブル)の仕組みが分かる。",
        "L4ではコネクション型のTCP,コネクションレス型のUDPがあり、ポートとポートを繋いでいる的なことが分かる。特にTCPではフラグを用いて3-way Handshakeを行ったりRSTを行ったりと色々と高機能なことが分かる。また、kurumi-proxyというショボいものではあるが、実際TCP通信のプログラムを書いたことがある。",
        "L5にはSSLがある。",
    ]]
    ],
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