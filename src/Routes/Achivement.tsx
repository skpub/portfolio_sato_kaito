/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { AchivementContent, Commit } from "./AchivementContent"
import { ScrollRestoration } from 'react-router-dom'
import kurumi from '/img/kurumi-proxy.png'
import dirbkup from '/img/DIrBackup.png'
import glkadai from '/img/gl_kadai.png'
import cts_img from '/img/cts.png'
import this_img from '/img/this.png'
import { HdrTitle, Header } from '../Header'
import { Footer } from '../Footer'

export const Achivement = () => {
  const kurumi_proxy: Commit = {
    title: "kurumi-proxy",
    description: "任意のTCPパケットのプロトコルを偽装するクライアント・サーバ両側プロキシ。クライアント側にkurumiプロキシを立て、サーバ側にcrackerプロキシを立てて、通信を仲介する。kurumiプロキシはパケットに偽装HTTPヘッダをつけてサーバに送る。crackerプロキシ側は偽装ヘッダを削ったパケットをサーバアプリケーションに渡す。",
    img_link: kurumi,
    gh_link: "https://github.com/skpub/kurumi-proxy"
  }
  const DIrBackup: Commit = {
    title: "DIrBackup",
    description: "Java用の差分バックアップ・増分バックアップライブラリ。通常の差分バックアップでは削除されたファイルを考慮しないが、このライブラリでは削除されたファイルも考慮するので、完全なバックアップが可能。なお差分バックアップのみ実装済みで、増分バックアップは実装されていない。(大変なので)",
    img_link: dirbkup,
    gh_link: "https://github.com/skpub/DIrBackup"
  }
  const gl_kadai: Commit = {
    title: "gl_kadai",
    description: "一関高専に在籍していたときに作った OpenGL の課題。Blenderなどの3Dモデリングソフトで作ったオブジェクトファイルをオブジェクトごとに分割し、OpenGL で読み込んでくるくる回すショーウィンドウのようなもの。",
    img_link: glkadai,
    gh_link: "https://github.com/skpub/gl_kadai"
  }

  const cts: Commit = {
    title: "CalenderTaskScheduler",
    description: "crontabの時間指定を受け取り、タスクを受け取り、指定通りにタスクを実行するライブラリ。crontab使えば良くね？という話だ。なぜ作ったんだろう。地味に大変だったのでソースを読んでほしい。",
    img_link: cts_img,
    gh_link: "https://github.com/skpub/CalenderTaskScheduler"
  }

  const this_pf: Commit = {
    title: "このポートフォリオ",
    description: "Viteを使ってReactで書かれている。react-router-domを使ったSPA.",
    img_link: this_img,
    gh_link: "https://github.com/skpub/portfolio_sato_kaito"
  }

  const hdr_title: HdrTitle = {
    title: "戻る",
    link: "/",
  }

  return (
    <>
    <div css={css`
      background: var(--mywhite);
      flex-grow: 1;
    `}>
      <Header {...hdr_title} />
      <div css={css`
        padding-top: 24px;
      `}>
        <h1 css={css`
          font-family: 'Zen Maru Gothic';
          margin: 0;
          color: var(--blueblack);
          padding-top: 24px;
        `}>成果物</h1>
        <div css={css`
          display: flex;
          flex-wrap: wrap;
        `}>
          <AchivementContent {...kurumi_proxy}/>
          <AchivementContent {...DIrBackup}/>
          <AchivementContent {...gl_kadai}/>
          <AchivementContent {...cts}/>
          <AchivementContent {...this_pf} />
          <ScrollRestoration />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
