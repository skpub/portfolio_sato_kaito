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
      <div css={css`
        display: flex;
        padding: 24px;
        @media screen and (max-width: 520px) {
          flex-flow: column;
        }
      `}>
        <div css={css`
          flex: 1;
          @media screen and (max-width: 520px) {
            margin: 24px;
            margin-bottom: 0px;
          }
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
          <h2 css={css`
            margin: 0;
            font-family: 'Zen Maru Gothic';
          `}>{props.title}</h2>
          <p css={css`
            margin-left: 24px;
            margin-right: 24px;
            font-family: 'Shippori Mincho';
          `}>{props.description}</p>
        </div>
      </div>
    </div>
  )
}