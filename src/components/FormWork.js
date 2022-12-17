import Input from "./Input";

function FormWork({ currentWork, helper }) {
  const updateWork = (id, newWork) => {
    helper({
      workList: currentWork.workList
        .filter((work) => work.id != id)
        .concat(newWork),
    });
  };

  const addWork = () => {
    helper({
      workList: [
        ...currentWork.workList,
        { id: currentWork.nextId, company: "", role: "", date: "", points: [] },
      ],
      nextId: currentWork.nextId + 1,
    });
  };

  const deleteWork = (id) => {
    helper({
      workList: currentWork.workList.filter((work) => work.id != id),
    });
  };

  const updatePoint = (id, work, index, value) => {
    const newPoints = [...work.points];
    newPoints.splice(index, 1, value);
    updateWork(id, { ...work, points: newPoints });
  };

  return (
    <div>
      <h2>Work Experience</h2>
      {currentWork.workList
        .sort((a, b) => a.id - b.id)
        .map((work, index) => (
          <div className="edu-form" key={index}>
            <Input
              label="Company"
              value={work.company}
              onChange={(e) =>
                updateWork(work.id, { ...work, company: e.target.value })
              }
            />
            <Input
              label="Role"
              value={work.role}
              onChange={(e) =>
                updateWork(work.id, { ...work, role: e.target.value })
              }
            />
            <Input
              label="Date"
              value={work.date}
              onChange={(e) =>
                updateWork(work.id, { ...work, date: e.target.value })
              }
            />
            <button onClick={() => deleteWork(work.id)} className="delete">
              X
            </button>
            {work.points.map((point, index) => (
              <div className="expand">
                <Input
                  label={`Point ${index + 1}`}
                  value={point}
                  onChange={(e) =>
                    updatePoint(work.id, work, index, e.target.value)
                  }
                />
                <button
                  onClick={() => deleteWork(work.id)
                  }
                  className="delete"
                >
                  X
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                updateWork(work.id, { ...work, points: work.points.concat("") })
              }
            >
              + Add Point
            </button>
          </div>
        ))}
      <button onClick={addWork}>+ Add work experience</button>
    </div>
  );
}

export default FormWork;
