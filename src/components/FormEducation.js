import { Component } from "react";
import Input from "./Input";

class FormEducation extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    updateEducation(id, newEducation) {
        this.props.helper("educationList")(
            this.props.currentEducation.educationList
              .filter((edu) => edu.id != id)
              .concat(newEducation)
          );
    }

    async addEducation() {
        const { currentEducation, helper } = this.props;
        await helper("educationList")([
            ...currentEducation.educationList,
            { id: currentEducation.nextId, school: "", title: "", date: "" },
        ]);

        await helper("nextId")(currentEducation.nextId + 1);

    }

    deleteEducation(id) {
        this.props.helper("educationList")(
            this.props.currentEducation.educationList.filter((edu) => edu.id != id)
          );
    }

    render() { 
        const {currentEducation} = this.props;
        return ( <div>
            <h2>Education</h2>
            {currentEducation.educationList.sort((a, b) => a.id - b.id).map(edu => <div className="edu-form">
                <Input label="School" value={edu.school} onChange={e => this.updateEducation(edu.id, {...edu, school: e.target.value})}/>
                <Input label="Title" value={edu.title} onChange={e => this.updateEducation(edu.id, {...edu, title: e.target.value})}/>
                <Input label="Date" value={edu.date} onChange={e => this.updateEducation(edu.id, {...edu, date: e.target.value})} />
                <button onClick={() => this.deleteEducation(edu.id)}>X</button>
                </div>)}
            <button onClick={this.addEducation.bind(this)}>+ Add education</button>
          </div> );
    }
}
 
export default FormEducation;