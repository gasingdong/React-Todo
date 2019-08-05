import React from 'react';

interface TodoFormProps {
  addTodo: (name: string) => void;
}

interface TodoFormState {
  todo: string;
}

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  private constructor(props: TodoFormProps) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  private handleChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({
      todo: event.target.value,
    });
    const { todo } = this.state;
    console.log(todo);
  };

  public render(): React.ReactElement {
    const { todo } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={todo}
            name="todo"
            onChange={this.handleChanges}
          />
          <button type="submit">Add Todo</button>
          <button type="submit">Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
