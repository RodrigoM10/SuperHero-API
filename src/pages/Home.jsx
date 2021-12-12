import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AppearanceData } from '../components/appearanceData/AppearanceData';
import { BarPowerstats } from '../components/barPowerstats/BarPowerstats';
import { CardTeamCharacter } from '../components/cardTeamCharacter/CardTeamCharacter';

import FormLogin from '../components/formLogin/FormLogin'

function Home({ tokenLocalData, requestToken, team, setTeam, heros, setHeros, villains, setVillains }) {

    const mapVillains = villains?.map((teamChar, i) => (
        <CardTeamCharacter
            key={i} teamChar={teamChar}
            team={team}
            setTeam={setTeam}
            setHeros={setHeros}
            heros={heros}
            setVillains={setVillains}
            villains={villains}

        />
    ));
    const mapHeros = heros?.map((teamChar, i) => (
        <CardTeamCharacter
            key={i} teamChar={teamChar}
            team={team}
            setTeam={setTeam}
            setHeros={setHeros}
            heros={heros}
            setVillains={setVillains}
            villains={villains}

        />
    ));
    return (
        <Container>
            {!tokenLocalData.token &&
                <div className="my-3 d-flex flex-column aling-items-center justify-content-center ">
                    <div className="glass-card text-center w-75 mx-auto ">
                        <h2>Bienvenido a SuperHero API</h2>
                    </div>
                    <div className="my-3 text-center">
                        Iniciá sesíon y forma tu equipo
                    </div>
                    <FormLogin
                        requestToken={requestToken} />
                </div>
            }
            {tokenLocalData.token &&
                <div>
                    <div className="my-4 ">
                        <div className="glass-card text-center w-75 mx-auto ">
                            <h2>MI TEAM</h2>
                        </div>
                        {team.length === 0 &&
                            <div className="my-3 text-center">
                                Aún no tienes ningun miembro en el equipo
                                <br />
                                <Button className='my-2' as={Link} variant="outline-success" to='/searchPage'>Buscador</Button>
                            </div>
                        }
                        {team.length <= 6 &&
                            <div className="my-3 text-center">
                                Equipo {team.length === 6 ? 'completo' : 'incompleto'} {team.length}/6
                                <br />
                                <Button className='my-2' as={Link} variant="outline-success" to='/searchPage'>Buscador</Button>
                            </div>
                        }

                        <div className="">
                            <h3>Powerstats</h3>
                            <BarPowerstats
                                team={team}
                            />
                        </div>
                        <div>
                            <h3>Peso y Altura</h3>
                            <AppearanceData
                                team={team}
                            />
                        </div>
                    </div>
                    <div>
                    </div>
                    <hr />
                    <div className="mb-3">
                        <div className="glass-card text-center w-50 mx-auto ">
                            <h4>Heroes</h4>
                        </div>
                        {heros.length === 0 &&
                            <div className="my-3 text-center">
                                Aún no tienes ningun Heroe en el equipo
                            </div>
                        }
                        {heros.length !==0 && heros.length <= 3 &&
                            <div className="my-3 text-center">
                                {heros.length}/3 Heroes
                            </div>
                        }
                        <div className="row row-cols-3 justify-content-center">
                            {mapHeros}
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="glass-card text-center w-50 mx-auto ">
                            <h4>Villanos</h4>
                        </div>
                        {villains.length === 0 &&
                            <div className="my-3 text-center">
                                Aún no tienes ningun Villano en el equipo
                            </div>
                        }
                        {villains.length !==0 && villains.length <= 3 &&
                            <div className="my-3 text-center">
                                {villains.length}/3 Villanos
                            </div>
                        }
                        <div className="row row-cols-3 justify-content-center">
                            {mapVillains}
                        </div>
                    </div>
                </div>
            }
        </Container>
    )
}

export default Home
