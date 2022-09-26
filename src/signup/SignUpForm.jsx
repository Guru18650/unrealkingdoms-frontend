import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import PasswordStr from "../libraries/PasswordStr";

import './SignUp.css';

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          required
          label="user name"
          value={user.username}
          onChange={onChange}
          error ={errors ? false : true}
          helperText={errors.username}
        />

        <TextField
          name="email"
          required
          label="email"
          value={user.email}
          onChange={onChange}
          error ={errors ? false : true}
          helperText={errors.email}
        />
        <TextField
          type={type}
          required
          name="password"
          label="password"
          value={user.password}
          onChange={onPwChange}
          error ={errors ? false : true}
          helperText={errors.password}
        />

        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} /> 
              <Button 
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              />
            </div>
            )} 
        </div>
        <TextField
          type={type}
          name="pwconfirm"
          required
          label="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          error ={errors ? false : true}
          helperText={errors.pwconfirm}

        />
        <br />
        <Button variant="contained"
          className="signUpSubmit"
          primary={true}
          type="submit"
        > Submit </Button>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/login">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
