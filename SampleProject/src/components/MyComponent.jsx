import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState();
    const [desc, setDesc] = useState("");
    const [allowance, setAllowance] = useState("Daily");
    const [job, setJob] = useState("Student");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleAgeChange(event){
        setAge(event.target.value);
    }

    function handleDescChange(event){
        setDesc(event.target.value);
    }

    function handleAllowanceChange(event){
        setAllowance(event.target.value);
    }

    function handleJobChange(event){
        setJob(event.target.value);
    }
    

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={age} onChange={handleAgeChange} type='number'/>
            <p>Age: {age}</p>
            
            <textarea value={desc} onChange={handleDescChange}
            placeholder='Enter Description'/>
            <p>Description: {desc}</p>

            <select value={allowance} onChange={handleAllowanceChange}>
                <option value="">Select an option</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>
            <p>Allowance Type: {allowance}</p>

            <label>
                <input type="radio" value="Student"
                checked={job === "Student"}
                onChange={handleJobChange}/>
                Student
            </label><br/>
            <label>
                <input type="radio" value="Intern"
                checked={job === "Intern"}
                onChange={handleJobChange}/>
                Intern
            </label><br/>
            <label>
                <input type="radio" value="Employee"
                checked={job === "Employee"}
                onChange={handleJobChange}/>
                Employee
            </label>
            <p>Job: {job}</p>
        </div>
    )

}

export default MyComponent