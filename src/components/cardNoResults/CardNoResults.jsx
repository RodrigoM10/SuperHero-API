import React from 'react'
import { Card } from 'react-bootstrap'

const CardNoResults = ({cardResults}) => {
    return (
        <Card className="text-center text-black-50 p-5 mt-5">
        <Card.Title>{cardResults}</Card.Title>
      </Card>
    )
}

export default CardNoResults
