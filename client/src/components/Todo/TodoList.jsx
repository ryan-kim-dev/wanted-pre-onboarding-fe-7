import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Item from './Item';
import AddTodo from './AddTodo';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.accessToken}`;

    axios
      .get('http://localhost:8000/todos')
      .then((res) => {
        console.log(res);
        return setTodoList(todoList);
        // return res.json();
      })
      .then(() => console.log(todoList));
  });

  return (
    <div>
      {isOpen ? (
        <AddTodo setIsOpen={setIsOpen} />
      ) : (
        <div>
          <button type="button" onClick={() => setIsOpen(true)}>
            할 일 추가
          </button>
        </div>
      )}

      {todoList?.map((todo) => (
        <Item todo={todo.todo} isCompleted={todo.isCompleted} />
      ))}
    </div>
  );
}

export default TodoList;
