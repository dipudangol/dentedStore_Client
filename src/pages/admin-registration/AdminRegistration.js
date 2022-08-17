import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { CustomInputField } from '../../components/customInputField/CustomInputField';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

const AdminRegistration = () => {
  const fields = [
    {
      label: "First Name",
      name: 'fname',
      type: 'text',
      placeholder: "sam",
      required: true,
    },
    {
      label: "Last Name",
      name: 'lname',
      type: 'text',
      placeholder: "smith",
      required: true,
    },
    {
      label: "Password",
      name: 'password',
      type: 'password',
      placeholder: "*******",
      required: true,
    },
    {
      label: "Email",
      name: 'email',
      type: 'email',
      placeholder: "abc@gdef.com",
      required: true,
    },
  ]
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className='form'>
          <Form>
            <h1>New Admin Registration</h1>

            <CustomInputField label="Name" type="text" placeholder="Enter your name here" />
            <CustomInputField label="Password" type="password" placeholder="******" />
            <CustomInputField label="email" type="email" placeholder="Enter your email here" />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default AdminRegistration;