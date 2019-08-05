import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import TodoData from './components/TodoData';

interface AppState {
  todoList: TodoData[];
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

  public componentDidMount(): void {
    this.setState(this.getLocalStorage());
  }

  private getLocalStorage = (): AppState => {
    const item = window.localStorage.getItem('todoList');
    return item ? JSON.parse(item) : { todoList: [] };
  };

  private setLocalStorage = (state: AppState): void => {
    window.localStorage.setItem('todoList', JSON.stringify(state));
  };

  private addTodo = (name: string): void => {
    this.setState(
      (prevState: AppState): AppState => {
        const newState = {
          todoList: [
            ...prevState.todoList,
            {
              task: name,
              id: Date.now(),
              completed: false,
            },
          ],
        };
        this.setLocalStorage(newState);
        return newState;
      }
    );
  };

  private toggleTodo = (id: number): void => {
    this.setState(
      (prevState: AppState): AppState => {
        const newState = {
          todoList: prevState.todoList.map(
            (todo): TodoData => {
              if (todo.id === id) {
                return {
                  ...todo,
                  completed: !todo.completed,
                };
              }
              return todo;
            }
          ),
        };
        this.setLocalStorage(newState);
        return newState;
      }
    );
  };

  private clearCompleted = (): void => {
    this.setState(
      (prevState: AppState): AppState => {
        const newState = {
          todoList: prevState.todoList.filter((todo): boolean => {
            return !todo.completed;
          }),
        };
        this.setLocalStorage(newState);
        return newState;
      }
    );
  };

  public render(): React.ReactNode {
    const { todoList } = this.state;
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList={todoList} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
