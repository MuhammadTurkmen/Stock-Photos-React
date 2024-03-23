import React from 'react'

const Photo = ({urls:{regular}, alt_description, likes, user:{name, portfolio_url, profile_url:{medium}}}) => {
  return <article className='photo'>
    <img src={regular} alt={alt_description} />
    <div className="photo-info">

    </div>
  </article>
}

export default Photo
