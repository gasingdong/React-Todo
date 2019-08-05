import React from 'react';

interface TodoFormProps {
  addTodo: (name: string) => void;
  clearCompleted: () => void;
  searchTerm: string;
  updateSearch: (search: string) => void;
}

interface TodoFormState {
  todo: string;
  search: string;
}

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  private constructor(props: TodoFormProps) {
    super(props);
    this.state = {
      todo: '',
      search: props.searchTerm,
    };
  }

  private handleChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    this.setState(
      (prevState: TodoFormState): TodoFormState => ({
        ...prevState,
        todo: value,
      })
    );
  };

  private handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const { todo } = this.state;
    const { addTodo } = this.props;
    this.setState(
      (prevState: TodoFormState): TodoFormState => ({
        ...prevState,
        todo: '',
      })
    );
    addTodo(todo);
  };

  private handleClear = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const { clearCompleted } = this.props;
    clearCompleted();
  };

  private handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState(
      (prevState: TodoFormState): TodoFormState => ({
        ...prevState,
        search: value,
      })
    );
    const { updateSearch } = this.props;
    updateSearch(event.target.value);
  };

  public render(): React.ReactElement {
    const { todo, search } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={todo}
            name="todo"
            onChange={this.handleChanges}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Add Todo
          </button>
          <button type="submit" onClick={this.handleClear}>
            Clear Completed
          </button>
          <input
            type="text"
            value={search}
            name="search"
            onChange={this.handleSearch}
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
