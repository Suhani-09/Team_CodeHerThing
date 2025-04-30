import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data));
  }, [id]);

  if (!member) return <p>Loading...</p>;

  return (
    <div className="details" style={styles.container}>
      <img
        src={`http://localhost:5000/uploads/${member.image}`}
        alt={member.name}
        style={styles.image}
      />
      <h2>{member.name}</h2>
      <p><strong>Roll Number & Degree:</strong> {member.roll} - {member.degree}</p>
      <p><strong>About Project:</strong> {member.project}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
      <p><strong>Certificates:</strong> {member.certificate}</p>
      <p><strong>Internship:</strong> {member.internship}</p>
      <p><strong>Aim:</strong> {member.aboutAim}</p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1e1e1e',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    marginTop: '60px',
    width: '360px',
    color: 'white',
    textAlign: 'left',
    border: '2px solid red',
    margin: '60px auto'
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '20px'
  }
};

export default MemberDetails;
