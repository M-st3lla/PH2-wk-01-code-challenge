import React from 'react'

function Item({ student }) {

    return (
        <div>
            <li>ID: {student.id}</li>
            <li>First Name: {student.first_name}</li>
            <li>Last Name: {student.last_name}</li>
            <li>Email: {student.email}</li>
            <li>Gender: {student.gender}</li>
            <li>Fee Balance: </li>
        </div>
    )
}

export default Item;