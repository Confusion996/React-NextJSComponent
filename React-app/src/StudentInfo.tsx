import React, { useState } from 'react';
import './StudentInfo.css';

function StudentInfo() {
  // This keeps track of what the user types
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  // This runs when the form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    alert(`Student Info:\nName: ${name}\nAge: ${age}\nCourse: ${course}`);
  };

  return (
    <div className="StudentInfo">
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        {}
        <div>
          <label>Name:</label><br />
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        {}
        <div>
          <label>Age:</label><br />
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>

        {}
        <div>
          <label>Course:</label><br />
          <input 
            type="text" 
            value={course} 
            onChange={(e) => setCourse(e.target.value)} 
          />
        </div>

        {}
        <button type="submit" style={{ marginTop: "1rem" }}>Submit</button>
      </form>
    </div>
  );
}

export default StudentInfo;
