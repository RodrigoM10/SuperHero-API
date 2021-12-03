import React from 'react'
import { Card } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import './cardCharacter.css'

export const CardCharacter = ({character}) => {
    return (
        <Card className="card-style p-0">
            <Card.Img className="card-img-style " variant="top" src={character.image.url} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <div>
            <button className="col-3" >
          <FaHeart  />
        </button>
        <button className="col-3" >
          Detalle
        </button>
            </div>
        </Card>
    )
}
