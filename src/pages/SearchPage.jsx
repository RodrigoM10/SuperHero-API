import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { CardCharacter } from '../components/shared/cardCharacter/CardCharacter';
import { useFetch, useFetchAll } from '../hooks/useFetch';



function SearchPage({ search, name }) {

    const [characters, setCharacters] = useState([]);

    const [allCharacters, isLoadingCharacters] = useFetch(
        `/search/${name}`
    );

    // useEffect(() => {
    //     const limit = 15;
    //     const start = 0 + page * limit - limit;
    //     const end = start + limit;


    // }, [input])


    console.log("🚀 ~ file: SearchPage.jsx ~ line 11 ~ SearchPage ~ characters", allCharacters)

    return (
        <div>
            Search a HERO

            <div className="row row-cols-3 justify-content-center align-items-center">
                {/* {allCharacters?.map((char) => (
                    <CardCharacter
                        key={char.id}
                        character={char}
                    //   onToggleFavorite={() => toggleFavorite(char.id)}
                    //   isFavorite={isFavorite(char.id)}
                    />
                ))} */}

                {!isLoadingCharacters && !allCharacters.length && (
                    <p>NO HAY RESULTADOS</p>
                )}

                <div className="position-fixed ">
                    {<Spinner size="lg" isLoading={isLoadingCharacters} />}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
