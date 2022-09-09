import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CustomInputField } from '../../components/customInputField/CustomInputField';
import AdminLayout from '../../components/layout/AdminLayout'
import { updateAdminProfileAction } from '../login/userAction';



export const AdminProfile = () => {
    const [form, setForm] = useState({});
    const [password, setPassword] = useState({});


    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.admin);
    useEffect(() => {

        user?._id && setForm(user);
    }, [user]);

    const handleOnProfileUpdate = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
        return;
    }
    const handleOnPasswordChange = () => {
        return;



    }

    const handleOnProfileSubmit = (e) => {
        e.preventDefault();
        const { address, dob, fName, lName, pone, _id } = form;
        dispatch(updateAdminProfileAction({ address, dob, fName, lName, pone, _id }));

    }

    const inputFields = [
        {

            name: 'fName',
            value: form.fName,
            label: "First Name",
            type: "text",
            placeholder: "smith",
            required: true
        },
        {

            name: 'lName',
            value: form.lName,
            label: "Last Name",
            type: "text",
            placeholder: "jack",
            required: true
        },
        {
            name: 'email',
            value: form.email,
            label: "email",
            type: "text",
            disabled: true,
            required: true,
        },
        {
            name: 'phone',
            value: form.phone,
            label: "phone",
            type: "text",
            required: true,
        },
        {
            name: 'address',
            value: form.address,
            label: "address",
            type: "text",
        },
        {
            name: 'dob',
            value: form.dob ? form.dob.slice(0, 10) : null,
            label: "dob",
            type: "date",
        },


    ];
    return (
        <AdminLayout>

            <div>AdminProfile</div>
            <div className='user-profile'>
                <h2>Update your profile</h2>
                <hr />
                <Form onSubmit={handleOnProfileSubmit}>

                    {
                        inputFields.map((input, i) => (
                            <CustomInputField {...input} key={i} onChange={handleOnProfileUpdate} />
                        ))
                    }
                    <Button type="submit" variant="warning">Update Profile</Button>
                </Form>
            </div>
            <hr />
            <div className='mt-5 py-5'>
                <h2>Update Password</h2>
                <hr />
                <Form>
                    <CustomInputField name="password" type="password" required={true} label="current password" />
                    <CustomInputField name="newPassword" type="password" required={true} label="New password" />
                    <CustomInputField name="confirmPassword" type="password" required={true} label="confirm passsword" />
                    <Button type="submit" variant="danger">Update Password</Button>
                </Form>
            </div>
        </AdminLayout>
    )
}
