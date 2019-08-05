import React from 'react';

interface TodoProps {
  task: string;
}

const Todo = (props: TodoProps): React.ReactElement => {
  const { task } = props;
  return <p>{task}</p>;
};

export default Todo;
