import React from 'react';
import TodoData from '../TodoData';
import './Todo.css';

interface TodoProps {
  todo: TodoData;
}

const Todo = (props: TodoProps): React.ReactElement => {
  const { todo } = props;
  return (
    <div className="todo">
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;
