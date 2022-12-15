import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { education } = this.props;
    return (
      <div id="education">
        <div className="header">Education</div>
        <div>
          {education.map((edu) => (
            <div className="edu">
              <p>
                {edu.school} {edu.title && <b>({edu.title})</b>}
              </p>
              <p> {edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
