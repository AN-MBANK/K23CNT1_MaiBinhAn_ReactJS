import React from 'react';

const MbaForm = ({ renderMbaStudent }) => {
    return (
        <div>
            <h2>Student Form</h2>
            {/* Form implementation can go here */}
            <p>Selected Student: {renderMbaStudent.mbaStudentName}</p>
        </div>
    );
};

export default MbaForm;
