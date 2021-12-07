import React from 'react'
import { Container } from 'react-bootstrap'
import FormLogin from '../components/formLogin/FormLogin'

function Home({ tokenLocalData, requestToken}) {


    return (
        <Container>
            {!tokenLocalData.token? 
                <FormLogin
                requestToken={requestToken}
                /> :
            "HOLANDAS MIS REYES"
            }
        </Container>
    )
}

export default Home
