import React from 'react';
import PropTypes from 'prop-types';

function Employee(props) {
    return (
        <div className="employee">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Employed: {props.isEmployee ? 'Yes' : 'No'}</p>
            <p>Department: {props.department}</p>
        </div>
    );
}

// PropTypes for validation
Employee.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isEmployee: PropTypes.bool.isRequired,
    department: PropTypes.string,
};

// Default props
Employee.defaultProps = {
    name: 'Juan',
    age: 20,
    isEmployee: false,
    department: 'N/A',
};

export default Employee;