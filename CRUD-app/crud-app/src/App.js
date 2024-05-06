import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import studentInfo from './components/Data';

function App() {
  const [studentData, setStudentData] = useState(studentInfo);
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [feeBalance, setFeeBalance] = useState(null);

  const handleCreateStudent = () => {
    const newStudent = {
      id: studentData.length + 1,
      first_name: <input firstName />,
      last_name: <input lastName />,
      email: <input email />,
      gender: <input gender />,
      fee_balance: "0"
    }


    setStudentData([...studentData, newStudent]);
    setShowPopup(false);
  };

  const handleDeleteStudent = (studentId) => {
    const updatedStudents = studentData.filter(student => student.id !== studentId);
    setStudentData(updatedStudents);
  };


  const handleStartButtonClick = () => {
    setShowPopup(true);
  };

  const handleCheckFeeBalance = () => {
    const student = studentData.find(student => student.id === parseInt(id));
    if (student) {
      setFeeBalance(student.fee_balance);
      setShowPopup(true);
    } else {
      alert('Student not found');
    }
  };


  return (
    <div>
      <h1>Imara Tuition Centre; Student Management</h1>
      <h2>Welcome. Kindly confirm your admission status below based on Fee Balance</h2>
      <button onClick={handleStartButtonClick} className="clicks">Start</button>
      <List studentInfo={studentData} />
      <button onClick={handleCreateStudent} className="click">Add New Student</button>
      <List studentInfo={studentData} onDeleteStudent={handleDeleteStudent} />

      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <label htmlFor="id" className="specs">ID:</label>
            <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} /><br /><br />
            <label htmlFor="firstName" className="specs">First Name:</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br /><br />
            <label htmlFor="lastName" className="specs">Last Name:</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br /><br />
            <button onClick={handleCheckFeeBalance} className="click">Check Fee Balance</button>
            <button onClick={handleCreateStudent} className="click">Add Student</button>
            <button onClick={() => setShowPopup(false)} className="click">Close</button>
            {feeBalance !== null && (
              <p>Fee Balance: {feeBalance}</p>
            )}
          </div>
        </div>
      )}
    </div>

  );
}

export default App;
