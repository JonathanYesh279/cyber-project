import React from 'react'

function Module({ title, data }) {
  return (
    <div className='card-module'>
      <h2>{title}</h2>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Module
