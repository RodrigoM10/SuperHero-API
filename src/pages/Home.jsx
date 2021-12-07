import React from 'react'
import { Container } from 'react-bootstrap'
import { CardTeamCharacter } from '../components/cardTeamCharacter/CardTeamCharacter';

import FormLogin from '../components/formLogin/FormLogin'

function Home({ tokenLocalData, requestToken, team, setTeam }) {

    const mapTeam = team?.map((teamChar, i) => (
        <CardTeamCharacter
            key={i} teamChar={teamChar}
            setTeam={setTeam} team={team}
        />
    ));


    return (
        <Container>
            {!tokenLocalData.token ?
                <FormLogin
                    requestToken={requestToken}
                /> :
                <div className="row row-cols-3 justify-content-center">
                    {mapTeam}
                </div>
            }
        </Container>
    )
}

export default Home
