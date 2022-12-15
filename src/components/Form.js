import { Component } from "react";
import FormParticulars from "./FormParticulars";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { helper, currentState } = this.props;
    return (
      <div id="form">
        <FormParticulars currentParticulars={currentState.particulars} helper={helper("particulars")} />
      </div>
    );
  }
}

export default Form;
