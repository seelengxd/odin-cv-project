import { Component } from "react";
import Input from "./Input";

class FormWork extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  updateWork(id, newWork) {
    this.props.helper("workList")(
        this.props.currentWork.workList
          .filter((work) => work.id != id)
          .concat(newWork)
      );
  }

  async addWord() {
    const {currentWork, helper } = this.props;
    await helper("workList")([
        ...currentWork.workList,
        { id: currentWork.nextId, company: "", role: "", date: "", points: [] },
    ]);

    await helper("nextId")(currentWork.nextId + 1);
  }

  deleteWork(id) {
    this.props.helper("workList")(
      this.props.currentWork.workList.filter((work) => work.id != id)
    );
  }

  updatePoint(id, work, index, value) {
    const newPoints = [...work.points];
    newPoints.splice(index, 1, value);
    this.updateWork(id, {...work, points: newPoints});
  }

  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        {this.props.currentWork.workList
          .sort((a, b) => a.id - b.id)
          .map((work, index) => (
            <div className="edu-form" key={index}>
                <Input label="Company" value={work.company} onChange={e => this.updateWork(work.id, {...work, company: e.target.value})}/>
                <Input label="Role" value={work.role} onChange={e => this.updateWork(work.id, {...work, role: e.target.value})}/>
                <Input label="Date" value={work.date} onChange={e => this.updateWork(work.id, {...work, date: e.target.value})} />
                <button onClick={() => this.deleteWork(work.id)} className="delete">X</button>
                    {work.points.map((point, index) => 
                    <div className="expand">
                        <Input
                        label={`Point ${index + 1}`}
                        value={point}
                        onChange={(e) => this.updatePoint(work.id, work, index, e.target.value)
                        }
                    />
                    <button onClick={() => this.updateWork(work.id, {...work, points: work.points.filter(p => p != point)})} className="delete">X</button>
                    </div>
                )}
                <button onClick={() => this.updateWork(work.id, {...work, points: work.points.concat("")})}>+ Add Point</button>
            </div>
          ))}
          <button onClick={this.addWord.bind(this)}>+ Add work experience</button>
      </div>
    );
  }
}

export default FormWork;
