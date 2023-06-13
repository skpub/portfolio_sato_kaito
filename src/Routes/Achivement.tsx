import { AchivementContent, Commit } from "./AchivementContent"
import kurumi from '/img/kurumi-proxy.png'

export const Achivement = () => {
  const kurumi_proxy: Commit = {
    title: "kurumi-proxy",
    description: "任意のTCPパケットのプロトコルを偽装するクライアント・サーバ両側プロキシ。クライアント側アプリ、サーバ側アプリを、クライアント側にkurumiプロキシを立て、サーバ側にcrackerプロキシを立てて仲介する。kurumiプロキシはパケットに偽装HTTPヘッダをつけてサーバに送る。crackerプロキシ側は偽装ヘッダ分を削ったものをサーバアプリケーションに渡す。",
    img_link: kurumi,
    gh_link: "https://github.com/skpub/kurumi-proxy"
  }
  return (
    <div>
      <AchivementContent {...kurumi_proxy}/>
    </div>
  )
}
