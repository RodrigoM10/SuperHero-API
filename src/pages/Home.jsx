import React from 'react'
import { Container } from 'react-bootstrap'
import { BarPowerstats } from '../components/barPowerstats/BarPowerstats';
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
            {!tokenLocalData &&
                <FormLogin
                    requestToken={requestToken} />
            }
            {tokenLocalData.token &&
                <div>
                    <div className="row row-cols-1">
                        <h2>MI TEAM</h2>
                        <div>
                            <h3>Powerstats</h3>
                            <BarPowerstats />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="row row-cols-3 justify-content-center">
                        {mapTeam}
                    </div>
                </div>
            }
        </Container>
    )
}

export default Home
