// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoData from '../TodoData';
import Todo from './Todo';

interface TodoListProps {
  todoList: TodoData[];
}

const TodoList = (props: TodoListProps): React.ReactElement => {
  const { todoList } = props;
  return (
    <>
      {todoList.map(
        (todo): React.ReactElement => (
          <Todo todo={todo} />
        )
      )}
    </>
  );
};

export default TodoList;
