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
    skills: {
      nextId: 3,
      skillList: [
        {
          id: 1,
          skill: "Python",
        },
        {
          id: 2,
          skill: "HTML",
        },
      ],
    },
    education: {
        nextId: 2,
        educationList: [
            {
                id: 1,
                school: "National University of Singapore",
                title: "Bachelor of Computing in Computer Science",
                date: "Aug 2021 - May 2025"
            }
        ]
    }
  };

  render() {
    this.setState = this.setState.bind(this);
    const helper = (firstKey) => (secondKey) => (value) =>
      this.setState({
        [firstKey]: { ...this.state[firstKey], [secondKey]: value },
      });
    return (
      <div className="cv">
        <Form helper={helper} currentState={this.state} />
        <View particulars={this.state.particulars} skills={this.state.skills.skillList} education={this.state.education.educationList} />
      </div>
    );
  }
}

export default Cv;
