import { useState } from "react";
import Form from "./Form";
import View from "./View";

function Cv() {
  const [particulars, setParticulars] = useState({
    name: "YOUR NAME",
    email: "example@example.com",
    phone: "your phone number",
    github: "githubacc",
  });

  const [skills, setSkills] = useState({
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
  });

  const [education, setEducation] = useState({
      nextId: 2,
      educationList: [
          {
              id: 1,
              school: "National University of Singapore",
              title: "Bachelor of Computing in Computer Science",
              date: "Aug 2021 - May 2025"
          }
      ]
  })

  const [work, setWork] = useState({
    nextId: 2,
    workList: [
        {
            id: 1,
            company: "some cool place",
            role: "Software Engineer Intern",
            date: "May 2022 - Jul 2022",
            points: ["I did task A", "I also did task B"]
        }
    ]
})

    const stateSetters = {
      'particulars': setParticulars,
      'skills': setSkills,
      'education': setEducation,
      'work': setWork
    }

    const state = {
      'particulars': particulars,
      'skills': skills,
      'education': education,
      'work': work
    }


    const helper = (firstKey) => (secondKey) => (value) =>
      stateSetters[firstKey]({ ...state[firstKey], [secondKey]: value })

    console.log(particulars)
    return (
      <div className="cv">
        <Form helper={helper} particulars={particulars} skills={skills} education={education} work={work} />
        <View particulars={particulars} skills={skills.skillList} education={education.educationList} work={work.workList} />
      </div>
    );
  
}

export default Cv;
