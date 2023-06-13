/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { getAge, Birthday} from './birthday'

const Title = () => {
    const birthday: Birthday = {
      year: 2002,
      month: 2,
      day: 11
    }
    return (
        <>
        <div css={css`
          position: absolute; 
          display: flex;
          flex-flow: column;
          height: 20vh;
          width: 100vw;
          top: 50vh;
          left: 50vw;
          transform: translate(-50%, -45%);
          background-color: #ffffffa0;
        `}>
          <h1 css={css`
            font-size: 48px;
            letter-spacing: 0.5em;
            margin: auto auto 0 auto;
            padding: 10px;
            color: #303f5a;
            font-family: 'Shippori Mincho', serif;
            @media screen and (max-width: 520px) {
              font-size: 32px;
            }
          `}>佐藤 海音</h1>
          <p css={css`
            margin: 0 auto auto auto;
            padding: 10px;
            font-size: 24px;
            letter-spacing: 0.5em;
            @media screen and (max-width: 520px) {
              font-size: 18px;
            }
          `}>{getAge(birthday)}歳
          </p>
        </div>
        </>
    )
}