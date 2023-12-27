import React from 'react'

const CardCharacter = ({item}) => {
    const {image,name,location,species,} = item
    const stylecard = {width:"300px"}
  return (
    <div className='mb-4 mt-3'style={stylecard}>
        <div className='card'>
        <img src={image} alt="" className='card-img' />
        <div className='card-body'>
            <h5 className='card-title text-primary'>{name}</h5>
            <hr />
        </div>
        <p>
            <span className='fw-bold ms-3'>Species:</span>  {species}
        </p>
        <p>
            <span className='fw-bold ms-3'>Location:</span> {location.name}
        </p>
    </div>
    </div>
  )
}

export default CardCharacter