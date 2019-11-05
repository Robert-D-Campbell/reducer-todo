import React, {useState} from 'react';

export default function TodoForm({dispatch}) {
    const [newTodo, setNewTodo] = useState('')

    const handleTodoChange = e => {
        setNewTodo(e.target.value);
    };

    const saveTodo = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setNewTodo('')
      };

      const clearCompleted = e => {
          e.preventDefault();
          dispatch({ type: 'CLEAR_TODO'})
      }

    return (
        <>
      <form className="todoform">
        <input 
          className="todoform__input"
          type="text" 
          placeholder="New Todo" 
          name="newTodo"
          value={newTodo}
          onChange={handleTodoChange}
        />
        <div className="btn-container">
          <button 
            onClick={saveTodo}>Add Todo</button>
          <button 
            onClick={clearCompleted}>Clear Completed</button>
        </div>
      </form>
    </>
    )
}
