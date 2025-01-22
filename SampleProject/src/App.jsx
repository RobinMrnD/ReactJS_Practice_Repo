import React from 'react';
import Employee from './Props/Employee';

function App() {
    return (
        <div>
            <Employee name="Robin" age={30} isEmployee={true} department="Front-End Development" />
            <Employee name="Cruz" age={42} isEmployee={true} department="Business Analytics" />
            <Employee name="Thomas" age={50} isEmployee={false} department="N/A" />
            <Employee name="Will" age={27} isEmployee={true} department="API Development" />
            <Employee /> 
        </div>
    );
}

export default App;