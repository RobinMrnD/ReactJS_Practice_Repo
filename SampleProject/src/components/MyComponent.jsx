import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Robin")
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleEmpStat = () =>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Employed: {isEmployed ? "Yes": "No"}</p>
            <button onClick={toggleEmpStat}>Change Employment Status</button>
        </div>
    )

}

export default MyComponent