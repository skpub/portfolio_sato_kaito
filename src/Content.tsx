/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

export type ContentProps = {
  title: string,
  img: string,
  link: string
}

export const Content = (props: ContentProps) => {

  const navigate = useNavigate()

  return (
    <li css={css`
      flex: 1;
      margin: 10px;
    `}>
      <img onClick={() => navigate(props.link)} css={css`
        width: 100%;
        &:hover {
          opacity: 80%;
        }
      `} src={props.img} alt="" />
      <h2>{props.title}</h2>
    </li>
  )
}