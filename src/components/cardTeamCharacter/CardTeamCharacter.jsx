import React from 'react'
import { Card } from 'react-bootstrap'

export const CardTeamCharacter = ({teamChar, team, setTeam}) => {

    const removeToTeam = () => {
        const filterTeam = team.filter((char) => char.character.id !== teamChar.character.id);
        setTeam(filterTeam);
      };

    return (
        <Card className="card-style p-0 mx-3">
            <Card.Img className="card-img-style " variant="top" src={teamChar.character.image.url} />
            <Card.Body>
                <Card.Title>{teamChar.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <div>
                <button onClick={removeToTeam}>
                  Eliminar
                </button>
                <button className="" >
                    Detalle
                </button>
            </div>
        </Card>
    )
}
