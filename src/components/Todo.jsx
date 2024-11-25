import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
// import {removeTodo , updateTodo} from ''

function Todo() {
  const todos = useSelector((state) => state.todos); // Select todos from the state
  const dispatch = useDispatch();
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleUpdateTodo = (id, text) => {
    if (text.trim()) {
      dispatch(updateTodo({ id, text })); // Dispatch the update action
      setEditTodoId(null); // Exit edit mode
      setEditText(''); // Clear the input
    }
  };

  return (
    <div>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editTodoId === todo.id ? (
              // Show input when editing
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                required
                className="text-black px-2 py-1 rounded"
              />
            ) : (
              // Display todo text
              <div className="text-white">{todo.text}</div>
            )}

            {editTodoId === todo.id ? (
              // Confirm update button
              <button
                onClick={() => handleUpdateTodo(todo.id, editText)}
                className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
              >
                ✅
              </button>
            ) : (
              // Edit button
              <button
                onClick={() => {
                  setEditTodoId(todo.id); // Enter edit mode
                  setEditText(todo.text); // Pre-fill input with current text
                }}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-auto mr-2 "
              >
                ✏️
              </button>
            )}

            {/* Delete button */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
