import { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div class="field">
        <label>{this.props.label}:</label>
        <input type="text" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Input;
