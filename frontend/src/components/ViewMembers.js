import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data));
  }, []);

  return (
    <div className="card-grid">
      {members.map(member => (
        <div className="card" key={member._id}>
          <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
          <h3>{member.name}</h3>
          <p style={{ color: 'white' }}>{member.roll}</p>
        <p style={{ color: 'white' }}>{member.degree}</p>
          <Link to={`/member/${member._id}`}><button>View Details</button></Link>
        </div>
      ))}
    </div>
  );
}

export default ViewMembers;
