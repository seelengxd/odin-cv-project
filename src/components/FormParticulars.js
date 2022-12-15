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
        <Input label="Name" value={currentParticulars.name} onChange={helper("name")} />
        <Input label="Email" value={currentParticulars.email} onChange={helper("email")} />
        <Input label="Phone" value={currentParticulars.phone} onChange={helper("phone")} />
        <Input label="Github" value={currentParticulars.github} onChange={helper("github")} />
      </div>
    );
  }
}

export default FormParticulars;
