
import { useState } from "react";
import "./../Styles/Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    city: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try{
        const response = await fetch(
            "http://127.0.0.1:8000/api/auth/register",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",

                },
                body:JSON.stringify(formData),
            }
        )

        const result = await response.json();

        if(!response.ok){
            alert(typeof result.detail ==="string"
                ? result.detail:JSON.stringify(result.detail)
            );
            return
        }
        
        alert("Registration Successfull!! Welcome to Wedora");
        console.log("Registration response:",result );

        setFormData({
            full_name:"",
            mobile_number:"",
            city:"",
            email:"",
            password:"",
        });
    }catch (error){
        console.error("Registration error:",error);
        alert("Could not connect to the server.please check your backend")
    }

   
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Join Wedora</h1>
        <p className="register-subtitle">
          Begin planning your perfect wedding.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="full_name">Full Name</label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              placeholder="Enter your full name"
              value={formData.full_name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={100}
            />
          </div>

          <div className="register-field">
            <label htmlFor="mobile_number">Mobile Number</label>
            <input
              id="mobile_number"
              name="mobile_number"
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.mobile_number}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={15}
            />
          </div>

          <div className="register-field">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              maxLength={100}
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
              maxLength={128}
            />
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>

        <p className="register-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
