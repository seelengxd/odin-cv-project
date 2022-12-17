import FormEducation from "./FormEducation";
import FormParticulars from "./FormParticulars";
import FormSkills from "./FormSkills";
import FormWork from "./FormWork";

function Form({ helper, particulars, skills, education, work }) {
  return (
    <div id="form">
      <FormParticulars
        currentParticulars={particulars}
        helper={helper("particulars")}
      />
      <FormSkills
        currentSkills={skills}
        helper={helper("skills")}
      />
      <FormEducation
        currentEducation={education}
        helper={helper("education")}
      />
      <FormWork currentWork={work} helper={helper("work")} />
    </div>
  );
}

export default Form;
