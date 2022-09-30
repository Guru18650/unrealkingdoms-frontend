import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

import './Login.css';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  type,
  onPwChange
}) => {
  return (
    <div className="loginBox">
      <h1>Login</h1>

      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      
      <form onSubmit={onSubmit}>
        
        <TextField
          name="email"
          required
          label="Email adress"
          value={user.email}
          onChange={onChange}
          error ={errors ? false : true}
          helperText={errors.email}
        />
        <TextField
          type={type}
          required
          name="password"
          label="Password"
          value={user.password}
          onChange={onPwChange}
          error ={errors ? false : true}
          helperText={errors.password}

        />
        <br />
        <Button variant="contained"
          className="loginSubmit"
          primary={true}
          type="submit"
        > Login </Button>
      </form>
      
    </div>
  );
};

export default LoginForm;
