import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import './cardCharacter.css'

export const CardCharacter = ({ character, team, setTeam }) => {

    const [isOnTeam, setIsOnTeam] = useState(false);

    const addToTeam = () => {
        setTeam((teamList) => teamList.concat({ character }))
    }
    const removeToTeam = () => {
        setTeam((teamList) => teamList.filter((teamChar) => teamChar.character.id !== character.id));
    };
    const toggleTeam = () => {
        const isFavored = team.some((teamChar) => teamChar.character.id === character.id);
        if (isFavored) {
            removeToTeam()
        } else {
            addToTeam()
        }
    }
    useEffect(() => {
        const OnTeam = team.some((teamChar) => teamChar.character.id === character.id);
        if (OnTeam) {
            setIsOnTeam(true);
        } else {
            setIsOnTeam(false)
        };
    }, [team, character]);



    return (
        <Card className="card-style p-0">
            <Card.Img className="card-img-style " variant="top" src={character.image.url} />
                <Card.Title className="text-center">{character.name}</Card.Title>
            <div className="d-flex justify-content-center my-2">
                <button
                    disabled={team.length === 6}
                    className={isOnTeam ? 'col-9 responsive-cart-button-add' : 'col-9 btn-general-style'}
                    onClick={toggleTeam} >
                    {isOnTeam ? (
                        'Agregado al Team'
                    ) : (
                        'Agregar al Team'
                    )}
                </button>
            </div>
        </Card>
    )
}
