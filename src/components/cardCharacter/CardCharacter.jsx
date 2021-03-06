import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import swal from 'sweetalert'
import './cardCharacter.css'

export const CardCharacter = ({ character, team, setTeam, heros, setHeros, villains, setVillains }) => {


    const [isOnTeam, setIsOnTeam] = useState(false);

    const addToTeam = () => {
        swal("Entonces... que camino tomará?", {
            buttons: {
                cancel: "Cancelar",
                hero: {
                    text: "Heroe",
                    value: "hero",
                },
                villain: {
                    text: "Villano",
                    value: "villain"
                }
            },
        })
            .then((value) => {
                switch (value) {

                    case "hero":
                        if(heros.length >= 3){
                            swal("Ya tienes el maximo de Heroes en tu Equipo")
                        } else {
                            setTeam((teamList) => teamList.concat({ character }))
                            setHeros((herosList) => herosList.concat({ character }))
                            swal("Un gran poder conlleva una gran responsabilidad!", `${character.name} será un gran heroe`, "success");
                        }

                        break;

                    case "villain":
                        if(villains.length >= 3){
                            swal("Ya tienes el maximo de Villanos en tu Equipo")
                        } else {
                            setTeam((teamList) => teamList.concat({ character }))
                            setVillains((villainsList) => villainsList.concat({ character }))
                            swal("No se trata de dinero, se trata de enviar un mensaje. ¡Todo arde!", `${character.name} será un gran villano`, "success");
                        }
                        break;

                    default:
                        swal("Entendido, dificil decisión...");
                }
            });
    }
    const removeToTeam = () => {
        setTeam((teamList) => teamList.filter((teamChar) => teamChar.character.id !== character.id));
        setHeros((herosList) => herosList.filter((heroChar) => heroChar.character.id !== character.id));
        setVillains((villainsList) => villainsList.filter((villanChar) => villanChar.character.id !== character.id));
    };

    useEffect(() => {
        const OnTeam = team.some((teamChar) => teamChar.character.id === character.id);
        if (OnTeam) {
            setIsOnTeam(true);
        } else {
            setIsOnTeam(false)
        };
    }, [team, character]);

    return (
        <Card className="glass-card card-style p-0">
            <Card.Img className="card-img-style " variant="top" src={character.image.url} />
            <Card.Title className="text-center mt-1">{character.name.toUpperCase()}</Card.Title>
            <div className="d-flex justify-content-evenly align-content-center my-2">
                <Button
                    disabled={isOnTeam || team.length === 6}
                    className={isOnTeam ? 'd-none ' : ''}
                    onClick={addToTeam} >
                    {isOnTeam ? (
                        'Agregado al Team'
                    ) : (
                        'Agregar al Team'
                    )}
                </Button>
                <Button
                variant='danger'
                    className={isOnTeam ? '' : 'd-none '}
                    onClick={removeToTeam} >
                    Eliminar del Team
                </Button>
            </div>
        </Card>
    )
}
