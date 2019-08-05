import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

interface AppState {
  todoList: string[];
}

class App extends React.Component<{}, AppState> {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  private constructor(props: {}) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  private addTodo = (name: string): void => {
    this.setState((prevState: { todoList: [] }): {} => ({
      todoList: [...prevState.todoList, name],
    }));
  };

  public render(): React.ReactNode {
    const { todoList } = this.state;
    return (
      <div>
        <h2>Todo List: MVP</h2>
        {todoList.map(
          (task): React.ReactElement => (
            <Todo task={task} />
          )
        )}
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
