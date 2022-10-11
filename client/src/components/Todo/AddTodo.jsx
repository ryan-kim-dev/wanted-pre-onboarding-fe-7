import React from 'react';

function AddTodo({ setIsOpen }) {
  return (
    <div>
      <div>
        <button type="button" onClick={() => setIsOpen(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
