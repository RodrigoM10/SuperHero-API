import React from 'react'
import { VscSearch } from 'react-icons/vsc'

export const SearchForm = ({setName, setCardResults, tokenLocalData}) => {
        // Funcion de busqueda
        const handleChange = (e) => {
            const keyword = e.target.value;
            setName(keyword);
            if (keyword.length >= 2) {
                setCardResults('No hay resultados')
            }
        };

    return (
        <div className="text-center my-3">
                <form className="search-form mx-auto" >
                    <div className="input-group mb-3 border-0">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            disabled={!tokenLocalData.token}
                            type="text"
                            className="col-11 search-input"
                            placeholder="  Buscá tus personajes... "
                            aria-describedby="basic-addon1"
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
    )
}
