import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
  };
  changeInputHandler = (event) => {
    this.setState((prev) => ({...prev, ...{
     [event.target.name]: event.target.value
    }}));
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div class="form-group mb-3">
          <label for="title" className="form-label">
            Post
          </label>
          <input
            name="title"
            type="text"
            className="form-control border-1 border-primary"
            id="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}
