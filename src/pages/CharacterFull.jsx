import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router';
import { CharacterDetail } from '../components/characterDetail/CharacterDetail'
import SpinLoader from '../components/spinLoader/SpinLoader'
import { useFetch } from '../hooks/useFetch';

export default function CharacterFull() {
    const { charId } = useParams();
    const [character, isLoading] = useFetch(charId);
    return (
        <Container>
            <CharacterDetail character={character} />

            <div className="position-absolute center-spinner">
                {<SpinLoader size="lg" isLoading={isLoading} />}
            </div>
        </Container>
    )
}
