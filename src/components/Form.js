import { Component } from "react";
import FormParticulars from "./FormParticulars";
import FormSkills from "./FormSkills";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { helper, currentState } = this.props;
    return (
      <div id="form">
        <FormParticulars
          currentParticulars={currentState.particulars}
          helper={helper("particulars")}
        />
        <FormSkills
          currentSkills={currentState.skills}
          helper={helper("skills")}
        />
      </div>
    );
  }
}

export default Form;
