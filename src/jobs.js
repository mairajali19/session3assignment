import React from 'react';

function Jobs(props) {
    return (
        <div className="job">
    <h3>Job Title: {props.jobTitle}</h3>
    <h3>Years of Experience: {props.yearsOfExp}</h3>
    <h3>Shift: {props.shift}</h3>
        </div>
    );
}

export default Jobs;