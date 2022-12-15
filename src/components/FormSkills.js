import { Component } from "react";
import Input from "./Input";

class FormSkills extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  updateSkill(id, newSkillName) {
    this.props.helper("skillList")(
      this.props.currentSkills.skillList
        .filter((skill) => skill.id != id)
        .concat({ id, skill: newSkillName })
    );
  }

  async addSkill() {
    const { currentSkills, helper } = this.props;
    await helper("skillList")([
      ...currentSkills.skillList,
      { id: currentSkills.nextId, skill: "" },
    ]);

    await helper("nextId")(currentSkills.nextId + 1);
  }

  deleteSkill(id) {
    this.props.helper("skillList")(
      this.props.currentSkills.skillList.filter((skill) => skill.id != id)
    );
  }

  render() {
    const { currentSkills } = this.props;
    return (
      <div>
        <h2>Skills</h2>
        {currentSkills.skillList
          .sort((a, b) => a.id - b.id)
          .map((skill, index) => (
            <div className="expand">
              <Input
                label={`Skill ${index + 1}`}
                value={skill.skill}
                onChange={(e) => this.updateSkill(skill.id, e.target.value)}
              />
              <button onClick={() => this.deleteSkill(skill.id)}>X</button>
            </div>
          ))}
        <button onClick={this.addSkill.bind(this)}>+ Add a skill</button>
      </div>
    );
  }
}

export default FormSkills;
