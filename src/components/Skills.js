function Skills({ skills }) {
  return (
    <div id="skills">
      <div className="header">Skills</div>
      <div>
        {skills.map(
          (skill) =>
            skill.skill && (
              <div className="badge" key={skill.id}>
                {skill.skill}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Skills;
