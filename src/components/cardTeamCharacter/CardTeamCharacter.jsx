import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

export const CardTeamCharacter = ({ teamChar, team, setTeam }) => {
    console.log("🚀 ~ file: cardTeamCharacter.jsx ~ line 5 ~ CardTeamCharacter ~ team", team)

    const {character} = teamChar;

    const removeToTeam = () => {
        const filterTeam = team.filter((char) => char.character.id !== teamChar.character.id);
        setTeam(filterTeam);
    };

    return (
        <Card className="card-style p-0 mx-3">
            <Card.Img className="card-img-style " variant="top" src={character.image.url} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Combate: {character.powerstats.combat} | Durabilidad: {character.powerstats.durability}</ListGroup.Item>
                    <ListGroup.Item>Inteligencia: {character.powerstats.intelligence} | Poder: {character.powerstats.power}</ListGroup.Item>
                    <ListGroup.Item>Velocidad: {character.powerstats.speed} | Fuerza: {character.powerstats.strength}</ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
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
