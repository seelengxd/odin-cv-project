import { Component } from "react";
import Input from "./Input";

class FormParticulars extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { helper } = this.props;
    return (
      <div>
        <h2>Personal Particulars</h2>
        <Input label="Name" onChange={helper("name")} />
        <Input label="Email" onChange={helper("email")} />
        <Input label="Phone" onChange={helper("phone")} />
        <Input label="Github" onChange={helper("github")} />
      </div>
    );
  }
}

export default FormParticulars;
