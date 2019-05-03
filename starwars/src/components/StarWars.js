import React from 'react'
import './StarWars.css';

const StarWars = (props) => {
  return (
    <section className="section-list">
      {props.starwarsChars.map(char =>
      <ul className="sw-names">
        <li className="char-names">{char.name}</li>
        <ul>
          <li className="char-att"><b>Birth Year: </b>{char.birth_year}</li>
          <li className="char-att"><b>Gender: </b>{char.gender}</li>
          <li className="char-att"><b>Height: </b>{char.height}</li>
          <li className="char-att"><b>Mass: </b>{char.mass} kg</li>
        </ul>
      </ul>) }
    </section>
  )
}

export default StarWars
