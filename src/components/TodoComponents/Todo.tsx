import React from 'react';
import TodoData from '../TodoData';
import './Todo.css';

interface TodoProps {
  todo: TodoData;
  toggleTodo: (id: number) => void;
}

const Todo = (props: TodoProps): React.ReactElement => {
  const { todo, toggleTodo } = props;
  return (
    <div
      role="button"
      className={`todo${todo.completed ? ' completed' : ''}`}
      onClick={(): void => toggleTodo(todo.id)}
      onKeyPress={(): void => toggleTodo(todo.id)}
      tabIndex={0}
    >
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;
