import React from 'react';

function Item(todo, isCompleted) {
  return (
    <div>
      <div>완료: {isCompleted}</div>
      <div>{todo}</div>
    </div>
  );
}

export default Item;
