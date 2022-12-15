import { Component } from "react";
import FormParticulars from "./FormParticulars";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { helper } = this.props;
    return (
      <div id="form">
        <FormParticulars helper={helper("particulars")} />
      </div>
    );
  }
}

export default Form;
