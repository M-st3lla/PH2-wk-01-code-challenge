import React from 'react';
import Item from './Item';

function Alist({ studentInfo }) {
    return (
        <>
            {studentInfo.map(student => (
                <ul>
                    <ul>
                        <Item key={student.id} student={student} />
                    </ul>
                </ul>
            ))}
        </>
    )
}

export default Alist;