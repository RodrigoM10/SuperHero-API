import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Characters } from '../components/Characters/Characters';
import FormLogin from '../components/formLogin/FormLogin';
import { SearchForm } from '../components/searchForm/SearchForm';


function SearchPage({ tokenLocalData, requestToken, team, setTeam, heros, setHeros, villains, setVillains }) {

    const [name, setName] = useState('')
    const [cardResults, setCardResults] = useState('Forma tu equipo de Super Heroes y Super Villanos')

    return (
        <Container className="d-flex flex-column justify-content-between  " >
            <div className="my-3 text-center">
                Busca aquí tus personajes favoritos para crear un equipo completo y fuerte. Acordate que las habilidades de los personajes se promedian, pensá y analizá las posibildiades. Usa tu imaginación, hay personajes de varios universos, asi que no te limites a los convecionales... 💪
            </div>
            <SearchForm
                tokenLocalData={tokenLocalData}
                setName={setName}
                setCardResults={setCardResults}
            />
            {!tokenLocalData.token ?
                <>
                    <h2> Para comenzar a formar tu equipo debes logearte </h2>
                    <FormLogin
                        requestToken={requestToken}
                    />
                </>
                :
                <Characters
                    team={team}
                    setTeam={setTeam}
                    heros={heros}
                    setHeros={setHeros}
                    villains={villains}
                    setVillains={setVillains}
                    cardResults={cardResults}
                    name={name}
                />
            }

        </Container>
    )
}

export default SearchPage
