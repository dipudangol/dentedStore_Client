import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { CustomInputField } from '../customInputField/CustomInputField'


export const ResetPasswordForm = ({ handleOnPasswordUpdate }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("sd");

  const handleOnChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setError("");
    const { password } = form;
    //check for errors
    //password field required check
    if (name === "ConfirmPassword") {
      password !== value && setError("password doesn't match");
      password.length < 6 && setError("password should be at least 6 character");
      !/[a-z]/.test(password) && setError("Password Must contain a lower letters");
      !/[A-Z]/.test(password) && setError("Password Must contain a upper letters");
      !/[0-9]/.test(password) && setError("Password Must contain a number");
      !password && setError("password must be provided");

    }
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    const { ConfirmPassword, ...rest } = form;
    handleOnPasswordUpdate(rest);

  }

  return (
    <div className='form'>
      <h2>Reset New Password</h2>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <CustomInputField
          onChange={handleOnChange}
          label="OTP"
          name="otp"
          type="number"
          required={true}
          placeholder="check your email for otp"
        />

        <CustomInputField
          onChange={handleOnChange}
          label="Password"
          name="password"
          required={true}
          type="password"
          placeholder="****"
        />

        <Form.Group className='py-3'>
          <Form.Text>
            Note: Password must contain at least one number, lowercase, uppercase
            and must be 6 character long
          </Form.Text>
        </Form.Group>

        <CustomInputField
          onChange={handleOnChange}
          label="Confirm Password"
          name="ConfirmPassword"
          required={true}
          type="password"
          placeholder="****"
        />

        <Form.Group className='py-3'>
          {error && <Alert variant='danger'>{error}</Alert>}
        </Form.Group>

        <Form.Group className="d-grid">

          <Button
            type="submit"
            variant="warning"
            disabled={error}
          >
            Reset Password</Button>
        </Form.Group>
        <div className="text-end">
          <a href="/reset-password">Request OTP</a>
        </div>
      </Form>
    </div>
  )
}
