import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { PercentageCircle } from '../percentageCircle/PercentageCircle';

export const CardTeamCharacter = ({ teamChar, team, setTeam, heros, setHeros, villains, setVillains }) => {
    const { character } = teamChar;

    const removeToTeam = () => {
        setTeam((teamList) => teamList.filter((teamChar) => teamChar.character.id !== character.id));
        setHeros((herosList) => herosList.filter((heroChar) => heroChar.character.id !== character.id));
        setVillains((villainsList) => villainsList.filter((villanChar) => villanChar.character.id !== character.id));
    };

    return (
        <Card className="card-style glass-card p-0 mx-3">
            <Card.Img className="card-img-style " variant="top" src={character.image.url} />
            <Card.Body>
                <Card.Title className="text-center">{character.name.toUpperCase()}</Card.Title>            
                <PercentageCircle character={character}/>
            </Card.Body>
            <div className="my-2 d-flex justify-content-evenly align-content-center">
                <Button variant='danger' onClick={removeToTeam}>
                    Eliminar
                </Button>
                <Button variant='info' as={Link} to={`/characterFull/${character.id}`}>
                    Ver Detalle
                </Button>
            </div>
        </Card>
    )
}
