import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Action/actionCreator';
import { bindActionCreators } from "redux";
class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todotext: "",
    }
    this.onChangeTodoText = this.onChangeTodoText.bind(this)
  }
  onChangeTodoText(e) {
    this.setState({
      todotext: e.target.value,
    })
  }
  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-10">
          <input
            onChange={this.onChangeTodoText}
            value={this.state.todotext}
            type="text"
            className="form-control"
            id="inputEmail3"
            style={{ marginTop: "7%", marginLeft: "100px" }}
            placeholder="Add todo here"
          />
          <button
            type="button"
            onClick={() => this.setState({ todotext: "" })}
            style={{ marginTop: "25px", marginLeft: "100px" }}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.addTodo(this.state.todotext);
              this.setState({ todotext: "" })}}
            style={{ marginTop: "25px", marginLeft: "20px" }}
            className="btn btn-success"
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  )
}
export default connect(null, mapDispatchToProps)(CreateTodo)
