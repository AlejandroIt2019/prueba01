import React, { useReducer } from 'react'
import { compReducer } from './components/compReducer'
import { TodoList } from './components/todoList'


export const Reducer = () => {

    
    
    return (
        <>
            
            <div className="row">
                <h2>Listado de todo</h2>
                <hr />
                
                <div className="col-7">

                    <TodoList todo={todos} />
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
