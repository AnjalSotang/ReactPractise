import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const response = await axios.post("https://react30.onrender.com/api/user/register", data, {
        validateStatus: (status) => status < 500, // Reject only if the status code is >= 500
      });
      if (response.status === 201) {
        navigate('/login');
      } else {
        alert(response.data.message || "Registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      type="Register"
      onSubmit={handleRegister}
      loading={loading}
    />
  );
};

export default Register;
