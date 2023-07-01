/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export type AbilityProp = {
  title : string,
  description: string,
  img: [string, string][]
}

export const AbilityContent = (props: AbilityProp) => {
  return (
    <>
    <div css={css`
      width: 80vw;
      margin: auto;
      padding-left: 30px;
      padding-right: 30px;
      background: var(--mygray);
    `}>
      <h2 css={css`
        padding: 24px;
        font-family: 'Zen Maru Gothic';
      `}>{props.title}</h2>
      <p>{props.description}</p>
      <div css={css`
        display: flex;
        @media screen and (max-width: 520px) {
          flex-flow: column;
        }
      `}>
        {props.img.map((pair) => {
          return (
            <>
            <div css={css`
              flex: 1;
              margin: 3vw;
            `}>
              <img src={pair.at(1)} alt="" css={css`
                width: 100%;
                height: 60%;
                object-fit: contain;
              `} />
              <p>{pair.at(0)}</p>
            </div>
            </>
          )
        })}
      </div>
    </div>
    </>
  )
}