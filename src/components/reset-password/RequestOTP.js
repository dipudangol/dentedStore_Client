import React, { useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

export const RequestOTP = ({ handleOnOTPRequest }) => {

  const emailRef = useRef();

  const handleOnSubmit = e => {
    e.preventDefault();
    handleOnOTPRequest(emailRef.current.value);
  }

  return (
    <Container>

      <div className='form'>

        <h2>Request OTP</h2>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef}
              name="email"
              type="email"
              placeholder="your@email.com"
              required />
          </Form.Group>


          <Form.Group>
            <div className='d-grid gap-2'>
              <Button type="submit" variant="primary">Request OTP</Button>
            </div>
          </Form.Group>
        </Form>
      </div >
    </Container>
  )
}
