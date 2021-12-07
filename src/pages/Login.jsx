import React from 'react'
import { Container } from 'react-bootstrap'
import FormLogin from '../components/formLogin/FormLogin'

export default function Login({requestToken}) {

    return (
        <Container className="d-flex flex-column justify-content-center align-content-center">
            <h2 className="text-center">INGRESA</h2>
            <FormLogin 
            requestToken={requestToken}
            />

        </Container>
    )
}
