import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './characterDetail.css'

export const CharacterDetail = ({ character }) => {
    const { image, name, appearance, biography, work } = character;
    console.log("🚀 ~ file: CharacterDetail.jsx ~ line 7 ~ CharacterDetail ~ character", character)

    return (
        <div className="card-details row ">
            <Card.Img
                variant="top"
                className=" col-12 col-lg-6 img-character my-2 "
                src={image?.url}
            />
            <div className="col-12 col-lg-6  d-flex flex-column aling-items-between card-body-container mx-auto">
                <Card.Body className="p-0">
                    <Card.Title className="text-center my-3">
                        {name}
                    </Card.Title>
                    <span>({biography?.aliases})</span>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Ubicación
                            <div className="text-center">
                            {work?.base}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item  >
                            Apariencia
                            <div className="text-start">

                                <li >Peso: {appearance?.weight[1]}</li>
                                <li>Altura: {appearance?.height[1]}</li>
                                <li>Color de Ojos: {appearance && appearance['eye-color']}</li>
                                <li>Color de Cabello: {appearance && appearance['hair-color']}</li>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Powerstats
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </div>
        </div>
    )
}
