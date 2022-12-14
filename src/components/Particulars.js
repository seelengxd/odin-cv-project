import { Component } from "react";

class Particulars extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <div id="particulars">
        <h1>Raul Stephens</h1>
        <p>example@example.com | (555) 555-5555 | github.com/whatever </p>
    </div>;
  }
}

export default Particulars;
