import { Component } from "react";
import FormEducation from "./FormEducation";
import FormParticulars from "./FormParticulars";
import FormSkills from "./FormSkills";
import FormWork from "./FormWork";

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
        <FormEducation
          currentEducation={currentState.education}
          helper={helper("education")}
        />
        <FormWork currentWork={currentState.work} helper={helper("work")} />
      </div>
    );
  }
}

export default Form;
