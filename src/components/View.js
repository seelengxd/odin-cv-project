import { Component } from "react";
import Education from "./Education";
import Particulars from "./Particulars";
import Skills from "./Skills";
import Work from "./Work";

class View extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="view">
        <Particulars particulars={this.props.particulars} />
        <Skills skills={this.props.skills} />
        <Education education={this.props.education}/>
        <Work />
      </div>
    );
  }
}

export default View;
