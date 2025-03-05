import React from 'react';

const MbaStudentList = ({ renderMbaStudents, onMbaHandleView }) => {
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {renderMbaStudents.map(student => (
                    <li key={student.mbaId} onClick={() => onMbaHandleView(student)}>
                        {student.mbaStudentName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MbaStudentList;
