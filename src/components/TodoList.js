import React, {useReducer} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { todoReducer, initialState } from '../reducers/todoReducer';

export default function TodoList() {
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    return (
        <div>
            <h1>Todo Form</h1>
            <TodoForm dispatch={dispatch} />
            <h1>todo list</h1>
            {state.map((todo) => {
                return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
            })}
            
        </div>
    )
}
