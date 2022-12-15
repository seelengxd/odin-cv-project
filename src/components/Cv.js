import { Component } from "react";
import Form from "./Form";
import View from "./View";

class Cv extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    particulars: {
      name: "YOUR NAME",
      email: "example@example.com",
      phone: "your phone number",
      github: "githubacc",
    },
  };

  render() {
    this.setState = this.setState.bind(this);
    const helper = (firstKey) => (secondKey) => (e) =>
      this.setState({
        [firstKey]: { ...this.state[firstKey], [secondKey]: e.target.value },
      });
    return (
      <div className="cv">
        <Form helper={helper} />
        <View particulars={this.state.particulars} />
      </div>
    );
  }
}

export default Cv;
