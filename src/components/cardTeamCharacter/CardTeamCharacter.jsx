import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const CardTeamCharacter = ({ teamChar, team, setTeam }) => {
    const {character} = teamChar;
    console.log("🚀 ~ file: CardTeamCharacter.jsx ~ line 7 ~ CardTeamCharacter ~ character", character)
    
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
                <Button className="mb-1" as={Link} to={`/characterFull/${character.id}`}>
                    Ver Detalle
                </Button>
            </div>
        </Card>
    )
}
