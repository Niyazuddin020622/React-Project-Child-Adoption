import React, { useState } from 'react';
import axios from 'axios';
import AdoptionResource from '../pages/AdoptionResource';

const ManageResources = () => {
  const [resource, setResource] = useState({
    title: '',
    description: '',
    link: '',
    buttonText: ''
  });
  const [message, setMessage] = useState(null); // Success/Error Message State
  const [loading, setLoading] = useState(false); // Loading Spinner State

  const handleChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    try {
      const response = await axios.post('http://localhost:3000/resources/create', resource);
      console.log('Resource Added:', response.data);

      setMessage({ type: 'success', text: 'Resource added successfully!' });

      // Clear the form after successful submission
      setResource({ title: '', description: '', link: '', buttonText: '' });

      setTimeout(() => setMessage(null), 5000); // Clear message after 5 seconds
    } catch (error) {
      console.error('Error adding resource:', error);
      setMessage({ type: 'error', text: 'Failed to add resource. Try again!' });

      setTimeout(() => setMessage(null), 5000); // Clear message after 5 seconds
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Manage Resources</h2>

        {/* Success/Error Message */}
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
              pattern="https?://.*" // URL validation pattern
              title="Please enter a valid URL (e.g. https://example.com)"
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
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              'Add Resource'
            )}
          </button>
        </form>
      </div>
      <br />
      <AdoptionResource />
    </div>
  );
};

export default ManageResources;
