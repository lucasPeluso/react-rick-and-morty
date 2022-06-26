import React from 'react'

const Character = ( {character} ) => {
    return (
        <div className='text-center p-5'>
            <h3 className='mb-3'>{character.name}</h3>
            <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
            <h6 className='mt-4 lh-base'>
                Gender: {character.gender} <br />
                Origin: {character.origin.name} <br />
                Status: <span className={ character.status === "Dead" ? 'text-danger' : 'text-success'}> 
                            {character.status}
                        </span>
            </h6>
        </div>
    )
}

export default Character