import React, { useReducer } from 'react'
import { goReducer } from './components/goReducer'
import { TodoList } from './components/TodoList'

const initialState  = [
    {
        id: new Date().getTime(),
        desc: "recolectar piedra del alma",
        done: false
    },
    {
        id: new Date().getTime(),
        desc: "recolectar piedra del poder",
        done: false
    }
]

export const Reducer = () => {
    const [todos, dispatch] = useReducer(goReducer, initialState)
    return (
        <>       
            {
                console.log(todos)
                
            }     
            <div className="row">
                <h2>Listado de todo</h2>
                <hr />
                
                
                    <div className="col-7">
                        <TodoList todo={todos}/>
                    </div>
                
                <div className="col-5">
                    <form>
                        <label>Task</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='insert value'
                        />
                        <button className='btn btn-primary mt-3'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
