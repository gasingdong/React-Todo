import React from 'react';

class TodoForm extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
