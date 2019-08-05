// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoData from '../TodoData';
import Todo from './Todo';

interface TodoListProps {
  todoList: TodoData[];
  toggleTodo: (id: number) => void;
  searchTerm: string;
}

const TodoList = (props: TodoListProps): React.ReactElement => {
  const { todoList, toggleTodo, searchTerm } = props;
  return (
    <>
      {todoList
        .filter((todo): boolean => todo.task.includes(searchTerm))
        .map(
          (todo): React.ReactElement => (
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          )
        )}
    </>
  );
};

export default TodoList;
