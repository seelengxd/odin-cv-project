import { Component } from "react";

class Particulars extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, email, phone, github} = this.props.particulars;
    return (
      <div id="particulars">
        <h1>{name}</h1>
        <p>{email} | {phone} | github.com/{github} </p>
      </div>
    );
  }
}

export default Particulars;
