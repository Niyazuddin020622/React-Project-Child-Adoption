import React, { useState } from 'react';
import axios from 'axios';

const ManageResources = () => {
  const [resource, setResource] = useState({
    title: '',
    description: '',
    link: '',
    buttonText: ''
  });

  const [message, setMessage] = useState(null); // ✅ Success/Error Message State

  const handleChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/resources/create', resource);
      console.log('Resource Added:', response.data);

      setMessage({ type: 'success', text: 'Resource added successfully!' });

      // Clear the form after successful submission
      setResource({ title: '', description: '', link: '', buttonText: '' });
    } catch (error) {
      console.error('Error adding resource:', error);
      setMessage({ type: 'error', text: 'Failed to add resource. Try again!' });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Manage Resources</h2>

        {/* ✅ Message Section */}
        {message && (
          <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="text" 
              name="title" 
              value={resource.title} 
              onChange={handleChange} 
              placeholder="Title" 
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <textarea 
              name="description" 
              value={resource.description} 
              onChange={handleChange} 
              placeholder="Description" 
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input 
              type="url" 
              name="link" 
              value={resource.link} 
              onChange={handleChange} 
              placeholder="Link" 
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              name="buttonText" 
              value={resource.buttonText} 
              onChange={handleChange} 
              placeholder="Button Text" 
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Resource
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default ManageResources;
