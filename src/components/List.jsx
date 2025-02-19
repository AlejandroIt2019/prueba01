import React from 'react'

export const List = ({todos}) => {
  return (
    
    <>
        <ul className='list-group'>
            <li className='list-group-item'>{todos.desc}</li>
        </ul>
    </>
  )
}
