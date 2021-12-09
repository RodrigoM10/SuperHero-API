import React, { useEffect, useState } from 'react'

import { useFetchSearch } from '../../hooks/useFetch'
import { CardCharacter } from '../cardCharacter/CardCharacter'
import CardNoResults from '../cardNoResults/CardNoResults'
import { PaginationCards } from '../paginationCards/PaginationCards'
import SpinLoader from '../spinLoader/SpinLoader'


export const Characters = ({ name, cardResults, team, setTeam, heros, setHeros, villains, setVillains }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentCharacters, setCurrentCharacters] = useState([]);

    const [allCharacters, isLoadingCharacters] = useFetchSearch(name);

    useEffect(() => {
        const limit = 9;
        const start = 0 + currentPage * limit - limit;
        const end = start + limit;

        if (!allCharacters) {
            setCurrentCharacters([]);
            setTotalPages(0);
            return;
        }
        const sliceCharacters = allCharacters.slice(start, end);
        setCurrentCharacters(sliceCharacters)

        const totalPages = Math.ceil(allCharacters.length / limit);
        setTotalPages(totalPages);
    }, [allCharacters, currentPage])

    return (
        <>
            <div>
                <div className="d-flex flex-column align-content-center justify-content-center">

                    <div className="row ">
                        {currentCharacters.length ? <span className="mb-2 text-center">Personajes Encontrados {allCharacters?.length}</span> : ''}
                        {currentCharacters.length ? <span className="mb-2 text-center">Pagina {currentPage} de {totalPages}</span> : ''}
                    </div>
                    <div className="row row-cols-3 justify-content-center align-items-center">
                        {currentCharacters?.map((char) => (
                            <CardCharacter
                                team={team}
                                setTeam={setTeam}
                                heros={heros}
                                setHeros={setHeros}
                                villains={villains}
                                setVillains={setVillains}
                                key={char.id}
                                character={char}
                            />
                        ))}
                    </div>
                </div>
                {!currentCharacters.length && !isLoadingCharacters && (
                    <div className="d-flex justify-content-center align-items-center">
                        <CardNoResults
                            cardResults={cardResults}
                        />
                    </div>
                )}
                <div className="position-absolute center-spinner">
                    {<SpinLoader size="lg" isLoading={isLoadingCharacters} />}
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                <PaginationCards
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>

        </>
    )
}
