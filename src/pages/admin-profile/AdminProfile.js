import React, { useEffect, useState } from 'react'
import { Alert, Button, Form, FormText } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CustomInputField } from '../../components/customInputField/CustomInputField';
import AdminLayout from '../../components/layout/AdminLayout'
import { updateAdminPasswordAction, updateAdminProfileAction } from '../login/userAction';




export const AdminProfile = () => {
    const [form, setForm] = useState({});
    const [password, setPassword] = useState({});
    const [error, setError] = useState('');


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
    }

    const handleOnProfileSubmit = (e) => {
        e.preventDefault();
        const { address, dob, fName, lName, pone, _id } = form;
        dispatch(updateAdminProfileAction({ address, dob, fName, lName, pone, _id }));

    }

    const handleOnPasswordUpdate = (e) => {
        const { newPassword, confirmPassword } = password;
        const { name, value } = e.target;
        setError("");
        if (name === "confirmPassword") {
            (newPassword !== value) && setError("password doesnt' match");
            !newPassword && setError("password field must be provided");
            newPassword.length < 6 && setError("password must be 6 character long");
            !/[a-z]/.test(newPassword) && setError("Must have at least one lower character");
            !/[A-Z]/.test(newPassword) && setError("Must have at least one upper character");
            !/[0-9]/.test(newPassword) && setError("Must have at least one number");
        }
        setPassword({
            ...password,
            [name]: value,
        })

    }

    const handleOnPasswordSubmit = (e) => {

        e.preventDefault()
        console.log(password);
        const { newPassword, confirmPassword } = password;
        if (!password || newPassword !== confirmPassword) {
            return alert(
                "Either current password is enmpty or new password and confirm password doesn't match"
            );
        }
        updateAdminPasswordAction({
            password: password.password,
            newPassword,
            _id: user._id,
        })
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

            <div>User Profile</div>
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
                <Form onSubmit={handleOnPasswordSubmit}>
                    <CustomInputField onChange={handleOnPasswordUpdate} name="password" type="password" required={true} label="current password" />
                    <CustomInputField onChange={handleOnPasswordUpdate} name="newPassword" type="password" required={true} label="New password" />
                    <Form.Group className="mb-3">
                        <FormText>Password must be unique, 6 character long containing lower case, upper case and characters</FormText>
                    </Form.Group>

                    <CustomInputField onChange={handleOnPasswordUpdate} name="confirmPassword" type="password" required={true} label="confirm passsword" />
                    {error &&
                        <Alert variant="danger">{error}</Alert>
                    }
                    <Button type="submit" variant="danger" disabled={error}>Update Password</Button>
                </Form>
            </div>
        </AdminLayout>
    )
}
