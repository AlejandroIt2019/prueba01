import React from 'react'
import { List } from './List'

export const TodoList = ({ todo = [] }) => {
    return (
        <>
            {
                todo.map(item => {
                    <List key={item.id} todos={item}/>
                })
            }
        </>
    )
}
