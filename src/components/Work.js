import { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div id="work">
        <div className="header">Work Experience</div>
        <div>{this.props.work.map(work =>  <div className="work">
            <div>
              <p>
                <b>{work.role}</b> / {work.company}
              </p>
              <p> {work.date}</p>
              </div>
              <ul>
                {work.points.map(point => <li>{point}</li>)}
              </ul>
            </div>)}</div>
      </div>
    );
  }
}

export default Work;
