// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoData from '../TodoData';
import Todo from './Todo';

interface TodoListProps {
  todoList: TodoData[];
  toggleTodo: (id: number) => void;
}

const TodoList = (props: TodoListProps): React.ReactElement => {
  const { todoList, toggleTodo } = props;
  return (
    <>
      {todoList.map(
        (todo): React.ReactElement => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        )
      )}
    </>
  );
};

export default TodoList;
