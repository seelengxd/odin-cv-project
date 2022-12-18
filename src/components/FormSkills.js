import Input from "./Input";

function FormSkills({ helper, currentSkills }) {
  const updateSkill = (id, newSkillName) => {
    helper({
      skillList: currentSkills.skillList
        .filter((skill) => skill.id !== id)
        .concat({ id, skill: newSkillName }),
    });
  };

  const addSkill = () => {
    helper({
      skillList: [
        ...currentSkills.skillList,
        { id: currentSkills.nextId, skill: "" },
      ],
      nextId: currentSkills.nextId + 1,
    });
  };

  const deleteSkill = (id) =>
    helper({
      skillList: currentSkills.skillList.filter((skill) => skill.id !== id),
    });

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
              onChange={(e) => updateSkill(skill.id, e.target.value)}
            />
            <button
              onClick={() => deleteSkill(skill.id)}
              className="delete"
            >
              X
            </button>
          </div>
        ))}
      <button onClick={addSkill}>+ Add skill</button>
    </div>
  );
}

export default FormSkills;
