import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            message:'Hello from todo',
            completed: false
        }
    ],

    addTodo:(todo)=>{},
    updateTodo:(id, todo) => {},
    
})