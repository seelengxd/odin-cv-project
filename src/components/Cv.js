import { Component } from "react";
import Education from "./Education";
import Particulars from "./Particulars";
import Skills from "./Skills";
import Work from "./Work";

class Cv extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="cv">
        <Particulars />
        <Skills />
        <Education />
        <Work />
      </div>
    );
  }
}

export default Cv;
