import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'
import { PercentageCircle } from '../percentageCircle/PercentageCircle';
import './characterDetail.css'

export const CharacterDetail = ({ character }) => {
    const { image, name, appearance, biography, work } = character;

    return (
        <div className=" glass-card card-details row justify-content-center ">
            <Card.Img
                variant="top"
                className=" glass-card col-12 col-lg-6 img-character p-0 "
                src={image?.url}
            />
            <Card.Body className="mx-2 p-0 col-12 col-lg-6  d-flex flex-column aling-items-between card-body-container">
                <div className="mb-2">
                    <h3 className="text-center my-3">
                        {name}
                    </h3>
                    <span>({biography?.aliases.toString()})</span>
                </div>
                <Container >
                    <div className="row mb-2">
                        <h5 className="text-center ">Ubicación</h5>
                        <span>
                            <ListGroup.Item className="rounded mb-1 ">{work?.base}  </ListGroup.Item>
                        </span>
                    </div>
                    <div >
                        <h5 className="text-center">Apariencia</h5>
                        <span className="d-flex flex-column justify-content-center aling-items-center ">
                            <ListGroup.Item className="rounded my-1" >Peso: {appearance?.weight[1]}</ListGroup.Item>
                            <ListGroup.Item className="rounded my-1" >Altura: {appearance?.height[1]}</ListGroup.Item>
                            <ListGroup.Item className="rounded my-1" >Color de Ojos: {appearance && appearance['eye-color']}</ListGroup.Item>
                            <ListGroup.Item className="rounded my-1" >Color de Cabello: {appearance && appearance['hair-color']}</ListGroup.Item>
                        </span>
                    </div>
                    <div >
                        <h5 className="text-center">Powerstats</h5>
                        <PercentageCircle character={character} />

                    </div>
                </Container>
            </Card.Body>
        </div>
    )
}
