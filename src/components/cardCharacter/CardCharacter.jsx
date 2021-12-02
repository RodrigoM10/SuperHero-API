import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'

export const CardCharacter = ({character}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={character.image.url} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
