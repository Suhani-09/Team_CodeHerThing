import React, { useState } from 'react';
import axios from 'axios';

function AddMember() {
  const [form, setForm] = useState({
    name: '',
    roll: '',
    degree: '',
    project: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aboutAim: '',
    image: null
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImage = e => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('roll', form.roll);
    data.append('degree', form.degree);
    data.append('project', form.project);
    data.append('hobbies', form.hobbies);
    data.append('certificate', form.certificate);
    data.append('internship', form.internship);
    data.append('aboutAim', form.aboutAim);
    data.append('image', form.image);

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added!');
    } catch (err) {
      alert('Failed to add member.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="roll"
          placeholder="Roll Number"
          value={form.roll}
          onChange={handleChange}
          required
        />
        <input
          name="degree"
          placeholder="Degree"
          value={form.degree}
          onChange={handleChange}
          required
        />
        <textarea
          name="project"
          placeholder="About Project"
          value={form.project}
          onChange={handleChange}
          required
        />
        <textarea
          name="hobbies"
          placeholder="Hobbies"
          value={form.hobbies}
          onChange={handleChange}
          required
        />
        <textarea
          name="certificate"
          placeholder="Certificate"
          value={form.certificate}
          onChange={handleChange}
        />
        <textarea
          name="internship"
          placeholder="Internship"
          value={form.internship}
          onChange={handleChange}
        />
        <textarea
          name="aboutAim"
          placeholder="About Your Aim"
          value={form.aboutAim}
          onChange={handleChange}
        />
        <input
          type="file"
          onChange={handleImage}
          accept="image/*"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;
