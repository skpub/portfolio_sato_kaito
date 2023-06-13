/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export type Commit = {
  title: string,
  description: string
  img_link: string
  gh_link: string
}

export const AchivementContent = (props: Commit) => {
  return (
    <div css={css`
        color: var(--blueblack);
    `}>
      <h1 css={css`
      font-family: 'Zen Maru Gothic';
        margin: 0;
        padding-top: 24px;
      `}>成果物</h1>
      <div css={css`
        display: flex;
        margin: 24px;
      `}>
        <div css={css`
          flex: 1;
        `}>
          <a href={props.gh_link}>
            <img css={css`
              object-fit: contain;
              width: 100%;
              height: 100%;
              &:hover {
                opacity: 80%;
              }
            `} src={props.img_link} alt="" />
          </a>
        </div>
        <div css={css`
          flex: 2;
        `}>
          <h1 css={css`
            font-family: 'Zen Maru Gothic';
          `}>{props.title}</h1>
          <p css={css`
            margin: 24px;
            font-family: 'Shippori Mincho';
          `}>{props.description}</p>
        </div>
      </div>
    </div>
  )
}