import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Form, FormControl, Spinner } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { CardCharacter } from '../components/shared/cardCharacter/CardCharacter';
import { useFetchSearch } from '../hooks/useFetch';



function SearchPage() {

    const [search, setSearch] = useState('');

    const [name, setName] = useState('')

    const [allCharacters, isLoadingCharacters] = useFetchSearch(name);

    // Funcion de busqueda
    const changeSearch = (e) => {
        const keyword = e.target.value;
        setSearch(keyword);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        setName(search)
    }

    return (
        <div>
            Search a HERO
            <Form className="d-flex"  onSubmit={submitSearch}>
                <FormControl
                    name="searchName"
                    type="search"
                    placeholder="Search a character..."
                    className="mr-2"
                    aria-label="Search"
                    onChange={changeSearch}
                   
                />
                <Button type='submit' variant="outline-success"><AiOutlineSearch /> </Button>
            </Form>

            <div className="row row-cols-3 justify-content-center align-items-center">
                { allCharacters?.map((char) => (
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

                {/* <div className="position-fixed ">
                    {<Spinner size="lg" isLoading={isLoadingCharacters} />}
                </div> */}
            </div>
        </div>
    )
}

export default SearchPage
