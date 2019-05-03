import React from 'react';
import './StarWars.css';

const DisplayCharacter = props => {
    return(
        <div className='character'>
            <h2>{props.char.name}</h2>
            <ul>
                <li>Height: {props.char.height}</li>
                <li>Mass: {props.char.mass}</li>
                <li>Birth Year: {props.char.birth_year}</li>
                <li>Hair Color: {props.char.hair_color}</li>
                <li>Eye Color: {props.char.eye_color}</li>
                <li>Skin Color: {props.char.skin_color}</li>
            </ul>
        </div>
    );
}

export default DisplayCharacter;