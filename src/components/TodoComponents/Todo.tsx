import React from 'react';
import TodoData from '../TodoData';

interface TodoProps {
  todo: TodoData;
}

const Todo = (props: TodoProps): React.ReactElement => {
  const { todo } = props;
  return <p>{todo.task}</p>;
};

export default Todo;
