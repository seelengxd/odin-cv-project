import Input from "./Input";

function FormEducation({ helper, currentEducation }) {
  const updateEducation = (id, newEducation) => {
    helper({
      educationList: currentEducation.educationList
        .filter((edu) => edu.id != id)
        .concat(newEducation),
    });
  };

  const addEducation = () => {
    helper({
      educationList: [
        ...currentEducation.educationList,
        { id: currentEducation.nextId, school: "", title: "", date: "" },
      ],
      nextId: currentEducation.nextId + 1,
    });
  };

  const deleteEducation = (id) => {
    helper({
      educationList: currentEducation.educationList.filter(
        (edu) => edu.id != id
      ),
    });
  };

  return (
    <div>
      <h2>Education</h2>
      {currentEducation.educationList
        .sort((a, b) => a.id - b.id)
        .map((edu) => (
          <div className="edu-form">
            <Input
              label="School"
              value={edu.school}
              onChange={(e) =>
                updateEducation(edu.id, { ...edu, school: e.target.value })
              }
            />
            <Input
              label="Title"
              value={edu.title}
              onChange={(e) =>
                updateEducation(edu.id, { ...edu, title: e.target.value })
              }
            />
            <Input
              label="Date"
              value={edu.date}
              onChange={(e) =>
                updateEducation(edu.id, { ...edu, date: e.target.value })
              }
            />
            <button onClick={() => deleteEducation(edu.id)} className="delete">
              X
            </button>
          </div>
        ))}
      <button onClick={addEducation}>+ Add education</button>
    </div>
  );
}

export default FormEducation;
