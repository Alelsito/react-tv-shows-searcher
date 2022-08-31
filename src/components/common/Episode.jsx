import React from 'react'

// Hooks
import useGetData from '../../hooks/useGetData'

const Episode = ({ urlEpisodes }) => {
  // Episodes per season
  const episodes = useGetData(`${urlEpisodes.href}/episodes`)

  return (
    <>
      {
        episodes.length !== 0 &&
        episodes.map((episode, index) => (
          <tr key={index}>
            <th scope='row'>{episode.number}</th>
            <td>{episode.airdate}</td>
            <td>{episode.name}</td>
            <td>{episode.rating.average}</td>
          </tr>
        ))
      }
    </>
  )
}

export default Episode
