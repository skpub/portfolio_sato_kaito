/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Record, CareerContent } from './CareerContent.tsx'
import { ScrollRestoration } from 'react-router-dom'
import { Header, HdrTitle } from '../Header.tsx'
import { Footer } from '../Footer'

export const Career = () => {
  const nitic: Record = {
    date: "2017年4月",
    school: "一関高専",
    strange: false,
    description: [
      ["1年次", ["教員の名言を管理するアプリ CppMeigens を作った。謎にC++で作られている。なお、当時はデータベースを知らなかったため、JSON パーサライブラリ picojson を使って名言を管理する方式を取っていた。"]],

      ["2年次", ["企業などで提供されている何かしらの API を選んで、叩くアプリを Python で作ろうと言われた。なので、自分で API から作ることにした。ちょうど昨年 CppMeigens を作っていたので、自宅サーバ上で Flask を使って API 化し、これを叩くアプリを作り、CppMeigens をサーバクライアントシステムに改良した。なお、この後友人がデータベースを用いて再設計し、Discord API を用いてより素晴らしい名言管理サービスを作ってくれたので、すぐに役目を終えた。"
    ]],

      ["3年次", ["基本情報から取って次に応用情報というのはなんかムカつくので、はじめに応用情報を取った。当時17歳。令和元年度秋試験のことである。",
      "また、Web アプリを作ろうというグループワークがあった。Markdown 記事をメンバに書いてもらって、それを一覧表示するアプリを私が作るということになった。当時 SPA の概念や React, Angular, Vue などのフレームワークは知らなかったが、",
      "「どうやら DOM というので html の構造ができていて、それは JS で操作できるらしい。じゃあページ遷移を JS でやりたかったら DOM 操作で切り替えるのが普通か～。」",
      "なんてやっていたら自前で SPA を実装していた。"
    ]],
    
      ["4年次", ["画像処理の授業でPNM形式の画像に対して微分フィルタはじめ色々なものを実装したりしていた。"]],

      ["5年次", ["席次2位(35人中)で卒業した気がする。この年に CG の授業で東京タワーを作った。また、blenderから出力したオブジェクトファイルをオブジェクトごとに分割するプログラム、及び OpenGL で読み込んでくるくる回すコードを書いた。ゲームなどを作る上で基礎的に重要なものを実装したと思う。"]]
    ]
  }
  const nu: Record = {
    date: "2022年4月",
    school: "新潟大学 理学部理学科(数学)",
    strange: true,
    description: [["3年次", ["うつ状態になり、何もできない。試験前日に焦りはじめ、脅威の能力に目覚める。鬼のように資料を眺めまくり、大量の証明を暗記し、複素解析学の試験に合格する。 ただし代償としてうつ状態が急性期に陥り、大学のリフレッシュルームで眠りながら叫び、複素解析学の知識を失い、寝込み続ける。ADHD/ASDと診断される。"]],

    ["4年次(今年度)", ["音声処理関連で興味があったため、ゼミでフーリエ解析の本を読み始める。また、唐突にプログラムを書きたくなりはじめ、ポートフォリオを準備したり、マイクラの全自動バックアッププラグインを開発し始める。マイクラの自動バックアップに必要な小さなライブラリとして CalenderTaskScheduler(crontabのようなもの)、DIrBackup(ファイル削除を考慮する差分・増分バックアップライブラリ)を作り上げる。"]]
  ]
  }

  const hdr_title: HdrTitle = {
    title: "戻る",
    link: "/",
  }
  return (
    <>
    <div css={css`
      flex-grow: 1;
      background: var(--mywhite);
      padding: 24px;
    `}>
      <Header {...hdr_title} />
      <div css={css`
        padding-top: 24px;
      `}>
        <h1 css={css`
          font-family: 'Zen Maru Gothic';
        `}
        >経歴・資格</h1>
        <h2>概略</h2>
        <div css={css`
          p {
            text-align: left;
            margin: 0px;
            padding: 4px;
            padding-left: 24px;
          }
        `}>
          <p>2017年4月 一関高専 入学</p>
          <p>2019年(令和元年度秋)<b>応用情報技術者試験</b>合格</p>
          <p>2022年3月 一関高専 卒業</p>
          <p>2022年4月 新潟大学理学部 編入学</p>
          <p>現在に至る</p>
        </div>
        <CareerContent {...nitic} />
        <CareerContent {...nu} />
        <ScrollRestoration />
      </div>
    </div>
    <Footer />
    </>
  )
}