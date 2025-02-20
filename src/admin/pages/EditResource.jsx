import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditResource() {
  const { id } = useParams(); // 🔹 URL से ID प्राप्त करें
  const navigate = useNavigate();
  const [resource, setResource] = useState(null); // 🔹 Resource State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Resource Data Load करें
  useEffect(() => {
    axios.get(`http://localhost:3000/resources/${id}`)
      .then(response => {
        console.log("Fetched Resource:", response.data); // ✅ Debugging
        setResource(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching resource:', error);
        setError('Resource not found!');
        setLoading(false);
      });
  }, [id]);

  // ✅ Input Change Handle करें
  const handleChange = (e) => {
    setResource(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Update Resource Handle करें
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updating Resource:", resource); // ✅ Debugging

    try {
      const response = await axios.put(`http://localhost:3000/resources/${id}`, resource);
      console.log("Updated Resource Response:", response.data); // ✅ Debugging
      alert('Resource updated successfully!');
      navigate('/admin-dashboard'); // 🔹 Redirect to Resources Page
    } catch (error) {
      console.error('Error updating resource:', error);
      setError('Failed to update resource.');
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-danger">{error}</p>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Edit Resource</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input 
              type="text" 
              name="title" 
              value={resource.title} 
              onChange={handleChange} 
              className="form-control" 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea 
              name="description" 
              value={resource.description} 
              onChange={handleChange} 
              className="form-control" 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Button Link</label>
            <input 
              type="url" 
              name="link" 
              value={resource.link} 
              onChange={handleChange} 
              className="form-control" 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Button Text</label>
            <input 
              type="text" 
              name="buttonText" 
              value={resource.buttonText} 
              onChange={handleChange} 
              className="form-control" 
              required 
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Update Resource</button>
        </form>
      </div>
    </div>
  );
}

export default EditResource;
