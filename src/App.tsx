import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  private constructor(props: {}) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
