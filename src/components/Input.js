import { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const {label, value, onChange} = this.props;
    return (
      <div class="field">
        <label>{label}:</label>
        <input type="text" value={value} onChange={onChange} />
      </div>
    );
  }
}

export default Input;
