import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/Todo/TodoList';
import Home from '../components/Home/Home';

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <TodoList />
    </div>
  );
}

export default Main;
