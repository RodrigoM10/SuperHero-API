import React, { useEffect, useState } from 'react'
import { Container  } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { Pagination } from '../components/pagination/Pagination';
import { CardCharacter } from '../components/shared/cardCharacter/CardCharacter';
import SpinLoader from '../components/spinLoader/SpinLoader';
import { useFetchSearch } from '../hooks/useFetch';



function SearchPage() {

    const [search, setSearch] = useState('');
    const [name, setName] = useState('')

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentCharacters, setCurrentCharacters] = useState([]);

    const [allCharacters, isLoadingCharacters] = useFetchSearch(name);


    useEffect(() => {
        const limit = 9;
        const start = 0 + currentPage * limit - limit;
        const end = start + limit;

        const sliceCharacters = allCharacters.slice(start, end);
        setCurrentCharacters(sliceCharacters)

        const totalPages = Math.ceil(allCharacters.length / limit);
        setTotalPages(totalPages);
    }, [allCharacters, currentPage])

    // Funcion de busqueda
    const handleChange = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        setName(keyword);
    };



    return (
        <Container className="">
            <div className="d-flex justify-content-between">
                <form >
                    <input
                        type="search"
                        onChange={handleChange}
                        placeholder="Search a character..."
                        aria-label="Search"
                        name="searchName"
                    />
                    {/* <button type="submit"><AiOutlineSearch /></button> */}
                </form>
                <div className="text-center d-flex">
                    EL PELUCA SAPE
                </div>
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

                {!isLoadingCharacters && !allCharacters.length && (
                    <p>NO HAY RESULTADOS</p>
                )}

                <div className="position-fixed ">
                        {<SpinLoader size="lg" isLoading={isLoadingCharacters} />}
                    </div>

            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages} />
            </div>
        </Container>
    )
}

export default SearchPage
