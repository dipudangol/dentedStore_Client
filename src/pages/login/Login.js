import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { CustomInputField } from '../../components/customInputField/CustomInputField';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { loginUserAction } from './userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const location=useLocation();

    const { user } = useSelector(state => state.admin);
    const origin=(location.state && location.state.from && location.state.from.pathname)|| "/dashboard";

    useEffect(() => {
        user._id && navigate(origin);
    }, [user, navigate]);

    const dispatch = useDispatch();
    const fields = [

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
    ]


    const handleOnChange = e => {
        const { name, value } = e.target;
        setLoginData(
            {
                ...loginData,
                [name]: value,
            })
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserAction(loginData));


    }
    return (
        <div>
            <Header />
            <Container className="page-main">
                <div className='form'>
                    <Form onSubmit={handleOnSubmit}>
                        <h1>Login Page</h1>

                        {
                            fields.map((item, i) =>
                                <CustomInputField key={i} {...item} onChange={handleOnChange} />
                            )
                        }

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </ div>
            </Container>
            <Footer />
        </div>
    )
}

export default LoginPage;