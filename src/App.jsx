import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {

  const {handleSubmit,register,formState:{errors},reset} = useForm()


  const formSubmit = (data) => {
    console.log(data);
    reset()
  }


  return (
    <div className="form-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="input-group">
          <label>Full Name</label>
          <input
          {...register("name",{
            required : "Name is Required",
            minLength : {value:3,message: "Minimum 3 Characters are Required "},
            maxLength : {value:20, message: "The name is too long"},
            pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name should contain letters only",
              }
          }
        
        )}
          type="text"  placeholder="Enter your name"  />
          {errors.name && (
            <p className="error">{errors.name.message}</p>
          )}
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
          {...register("email",{
            required : "Email is Required",
            minLength : {value:13,message: "The email is too short"},
            maxLength : {value:30, message: "The email is too long"},
          })}
          type="email"  placeholder="Enter your email"  />
          {errors.email && (
            <p className="error">{errors.email.message}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
              },
            })}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>




        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App