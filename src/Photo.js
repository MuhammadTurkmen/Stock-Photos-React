import React from 'react'

const Photo = ({urls:{regular}, alt_description, likes, user:{name, portfolio_url, profile_image:{medium}}}) => {
  return <article className='photo'>
    <img src={regular} alt={alt_description} />
    <div className="photo-info">
      <h4>{name}</h4>
      <p>{likes} likes</p>
    </div>
  </article>
}

export default Photo
