import React, { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetchData'
import Character from './Character'

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <p>Current Page: {props.page}</p>
                <div>
                    {
                        props.page === 1 ?
                            <button className='btn btn-primary btn-sm m-2'>
                                Page 1
                            </button>
                            : <button 
                                className='btn btn-primary btn-sm m-2'
                                onClick={() => props.setPage(props.page - 1)}
                            >
                                Previous Page : {props.page - 1}
                            </button>
                    }
                    {
                        props.page === 42 ?
                            <button className='btn btn-primary btn-sm'>
                                Page 42
                            </button>
                            : <button className='btn btn-primary btn-sm'
                            onClick={() => props.setPage(props.page + 1)}
                            >
                                Next Page : {props.page + 1}
                            </button>}
                </div>
        </header>
    )
}



const CharacterList = () => {

    const [ characters, setCharacters ] = useState([])
    const [ page, setPage ] = useState(1)

    useEffect(() => {
        const fetchCharactersData = async () => {
            const charactersData = await fetchData(`https://rickandmortyapi.com/api/character?page=${page}`);
            setCharacters(charactersData.results)
        }
        fetchCharactersData();
    }, [page])

    return (
        <div className='container'>
            <NavPage page={page} setPage={setPage} />
                <div className="row">
                    {
                        characters.map(character => {
                            return (
                                <div className="col-md-4">
                                    <Character key={character.id} character={character} />
                                </div>
                            )
                        })
                    }    
                </div>
            <NavPage page={page} setPage={setPage} />
        </div>
    )
}

export default CharacterList