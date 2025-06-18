import type { IPaintingProps } from './type'

import React from 'react'

interface IPaintingProps2 {
  painting: IPaintingProps[]
}

const Painting: React.FC<IPaintingProps2> = ({ painting }) => {
  return (
    <>
      <ul>
        {painting.map(({ name, username }) => (
          <li key={name}>
            {/* <img src={url} alt={title} />
            <h1>{title}</h1> */}
            <h1>{name}</h1>
            <p>{username}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Painting
