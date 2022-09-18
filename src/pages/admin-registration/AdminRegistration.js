import React, { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomInputField } from '../../components/customInputField/CustomInputField';
import AdminLayout from '../../components/layout/AdminLayout';
import { postUser } from '../../helpers/axiosHelper';

const AdminRegistration = () => {

  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState({
    status: "",
    message: "",
  });

  const handleOnChange = e => {
    const { name, value } = e.target;
    setFormData(
      {
        ...formData,
        [name]: value,
      })
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await postUser(formData);
    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password) {
      return alert("password doesn't match!");
    }

    setResponse(result);
  }

  const fields = [
    {
      label: "First Name",
      name: 'fName',
      type: 'text',
      placeholder: "sam",
      required: true,
    },
    {
      label: "Last Name",
      name: 'lName',
      type: 'text',
      placeholder: "smith",
      required: true,
    },
    {
      label: "Phone",
      name: 'phone',
      type: 'number',
      placeholder: "1234567",
      required: false,
    },
    {
      label: "Address",
      name: 'address',
      type: 'text',
      placeholder: "adress here..",
      required: false,
    },
    {
      label: "Date of Birth",
      name: 'dob',
      type: 'date',
      placeholder: "DD/MM/YYYY",
      required: true,
    },
    {
      label: "Email",
      name: 'email',
      type: 'email',
      placeholder: "abc@gdef.com",
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
      label: "Confirm Password",
      name: 'confirmPassword',
      type: 'password',
      placeholder: "*******",
      required: true,
    },

  ]
  return (
    <AdminLayout>
      <div className='mt-3'>
        <Link to="/admin-users" className="text-decoration-none text-secondary">&lt; Back</Link>
      </div>
      <Container className="page-main">
        <div className='form'>
          <Form onSubmit={handleOnSubmit}>
            <h1>New Admin Registration</h1>

            {response.message && (
              <Alert variant={response.status === "success" ? "success" : "danger"}>
                {response.message}</Alert>
            )}
            {
              fields.map((item, i) =>
                <CustomInputField key={i} {...item} onChange={handleOnChange} />
              )
            }

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </AdminLayout>
  )
}

export default AdminRegistration;