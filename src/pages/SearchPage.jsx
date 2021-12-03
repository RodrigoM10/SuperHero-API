import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Pagination } from '../components/pagination/Pagination';
import { CardCharacter } from '../components/cardCharacter/CardCharacter';
import SpinLoader from '../components/spinLoader/SpinLoader';
import { useFetchSearch } from '../hooks/useFetch';
import CardNoResults from '../components/cardNoResults.jsx/CardNoResults';
import { VscSearch } from 'react-icons/vsc'


function SearchPage() {

    const [name, setName] = useState('')
    const [cardResults, setCardResults] = useState('Forma tu equipo de Super Heroes y/o Super Villanos')

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

    // Funcion de busqueda
    const handleChange = (e) => {
        const keyword = e.target.value;
        setName(keyword);
        if(keyword.length >= 2) {
            setCardResults('No hay resultados')
        }
        
    };

    return (
        <Container className="d-flex flex-column justify-content-between " >
            <div className="text-center my-3">
                <div className="my-3">
                    Busca aquí tus personajes favoritos para crear un equipo completo y fuerte. Acordate que las habilidades de los personajes se promedian, pensá y analizá las posibildiades. Usa tu imaginación, hay personajes de varios universos, asi que no te limites a los convecionales... Suerte y exitos 💪
                </div>
                <form className="search-form mx-auto" >
                <div className="input-group mb-3 border-0">
                    <span
                        className="search-icon"
                        id="basic-addon1"><VscSearch /></span>
                    <input
                        type="text"
                        className="col-11 search-input"
                        placeholder="Buscá tus personajes... "
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                    />
                </div>
            </form>
            </div>
            <div>
                <div className="d-flex flex-column align-content-center justify-content-center">

                    <div className="row ">
                        {currentCharacters.length ? <span className="mb-2 text-center">Personajes Encontrados {allCharacters?.length}</span> : ''}
                        {currentCharacters.length ? <span className="mb-2 text-center">Pagina {currentPage} de {totalPages}</span> : '' }
                    </div>
                    <div className="row row-cols-3 justify-content-center align-items-center">
                        {currentCharacters?.map((char) => (
                            <CardCharacter
                                key={char.id}
                                character={char}
                            //   onToggleFavorite={() => toggleFavorite(char.id)}
                            //   isFavorite={isFavorite(char.id)}
                            />
                        ))}
                    </div>
                </div>
                {!currentCharacters.length && !isLoadingCharacters &&   (
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
            <div className="d-flex justify-content-center bottom-0 my-5">
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages} />
            </div>
        </Container>
    )
}

export default SearchPage
