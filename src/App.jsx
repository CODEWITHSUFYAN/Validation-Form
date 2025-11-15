import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import SuccessAnimation from "./SuccessAnimation";


const App = () => {
  const [submitted, setSubmitted] = useState(false);
 

  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  useEffect(() => {
    document.body.className = "dark";
  }, []);



  const formSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <>
      <Toaster position="top-center" />

      {!submitted ? (
        <div className="form-container">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Minimum 3 chars" },
                  maxLength: { value: 20, message: "Maximum 20 chars" },
                  pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters allowed" }
                })}
                placeholder="Enter your name"
                type="text"
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  minLength: { value: 13, message: "Email too short" },
                  maxLength: { value: 30, message: "Email too long" }
                })}
                placeholder="Enter your email"
                type="email"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="input-group">
             <label>Password</label>
               <input
                 type="password"
                 {...register("password", {
                   required: "Password is required",
                   minLength: { value: 6, message: "Password must be at least 6 characters" },
                   pattern: {
                     value: /^[A-Za-z0-9@$!%*?&]+$/,
                     message: "Password can contain letters, numbers, and special characters"
                   }
                 })}
                 placeholder="Enter your password"
               />
               {errors.password && <p className="error">{errors.password.message}</p>}
            </div>


            <button type="submit">Register</button>
          </form>
        </div>
      ) : (
        <SuccessAnimation />
      )}
    </>
  );
};

export default App;
