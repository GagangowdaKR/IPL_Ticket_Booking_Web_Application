import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AdminRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    aadhar: "",
    email: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    gender: "Male",
    password: "",
    confirmPassword: "",
    confirm: false,
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.city || !formData.state) {
      alert("Please select both the city and state.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.get("/api/admin-register", {
        params: formData,
      });

      if (response.status === 400) {
        alert("Registration failed: " + response.data.message);
      } else {
        setSuccess(true);
        setTimeout(() => {
          navigate("/adminLogin");
        }, 2000);
      }
    } catch (error) {
      alert("Registration failed: " + error.response?.data || error.message);
    }
  };

  return (
    <section>
      
      <form id="registerForm" className="data-section" onSubmit={handleSubmit}>
        <div className="data-form">
          <h2 className="fw-bold mb-6">Admin Register</h2>
          <br />
          {[
            { label: "Username", name: "username", type: "text" },
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Aadhar Card Number", name: "aadhar", type: "text" },
            { label: "Email ID", name: "email", type: "email" },
            { label: "Mobile Number", name: "mobileNumber", type: "text" },
            { label: "Address", name: "address", type: "text" },
            { label: "Pincode", name: "pincode", type: "text" },
            { label: "Password", name: "password", type: "password" },
            { label: "Confirm Password", name: "confirmPassword", type: "password" },
          ].map(({ label, name, type }) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}:</label>
              <input
                type={type}
                className="form-control"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <div className="form-group">
            <label>City:</label>
            <select
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div className="form-group">
            <label>State:</label>
            <select
              name="state"
              className="form-control"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="">Select State</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender:</label>
            {["Male", "Female", "Transgender"].map((gender) => (
              <label key={gender} className="radio-inline" style={{ marginLeft: "15px" }}>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleInputChange}
                />
                {gender}
              </label>
            ))}
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="confirm"
                checked={formData.confirm}
                onChange={handleInputChange}
              />
              Please confirm the above details are true to your knowledge
            </label>
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </div>
      </form>
      <br />
      {success && (
        <div className="alert alert-success">
          <strong>Success!</strong> Registration completed successfully.
        </div>
      )}
    </section>
  );
};

export default AdminRegister;
