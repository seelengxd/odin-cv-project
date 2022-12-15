import { Component } from "react";
import Input from "./Input";

class FormParticulars extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { helper, currentParticulars } = this.props;
    return (
      <div>
        <h2>Personal Particulars</h2>
        <Input
          label="Name"
          value={currentParticulars.name}
          onChange={(e) => helper("name")(e.target.value)}
        />
        <Input
          label="Email"
          value={currentParticulars.email}
          onChange={(e) => helper("email")(e.target.value)}
        />
        <Input
          label="Phone"
          value={currentParticulars.phone}
          onChange={(e) => helper("phone")(e.target.value)}
        />
        <Input
          label="Github"
          value={currentParticulars.github}
          onChange={(e) => helper("github")(e.target.value)}
        />
      </div>
    );
  }
}

export default FormParticulars;
