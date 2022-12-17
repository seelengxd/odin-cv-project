import Education from "./Education";
import Particulars from "./Particulars";
import Skills from "./Skills";
import Work from "./Work";

function View({ particulars, skills, education, work }) {
  console.log(particulars)
  return (
    <div className="view">
      <Particulars particulars={particulars} />
      <Skills skills={skills} />
      <Education education={education} />
      <Work work={work} />
    </div>
  );
}

export default View;
