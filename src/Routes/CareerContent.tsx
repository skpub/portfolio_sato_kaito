/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export type Record = {
  date: string
  school: string,
  strange: boolean,
  description: [string, string[]][]
}

export const CareerContent = (props: Record) => {
  return (
    <div css={css`
      padding: 24px;
      text-align: left;
    `}>
      <h2 css={css`
        margin: 0;
        font-family: 'Zen Maru Gothic';
      `}>{props.date} {props.school} {props.strange ? "編": ""}入学</h2>
      {props.description.map((([k,v]) => {
        return (
          <div>
            <h3 css={css`
              padding-left: 1em;
            `}>{k}</h3>
            {v.map((w) => {
              return (
                <p css={css`
                  padding-left: 2em;
                  /* text-indent: 1em; */
                `}>{w}</p>
              )
            })}
          </div>
        )
      }))}
    </div>
  )
}