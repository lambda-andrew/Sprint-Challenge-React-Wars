import React from 'react'
import './StarWars.css';

const StarWars = (props) => {
  return (
    <ul>
      { props.starwarsChars.map(char => <li>{char.name}</li>) }
    </ul>
  )
}

export default StarWars
