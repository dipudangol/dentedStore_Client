import React, { useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { RequestOTP } from '../../components/reset-password/RequestOTP'
import { ResetPasswordForm } from '../../components/reset-password/ResetPasswordForm'
import { resetAdminUserPassword } from '../../helpers/axiosHelper'


const ResetPassword = () => {
    const [passwordFrom, setPasswordForm] = useState("otp");
    const [resp, setResp] = useState({});

    const handleOnOTPRequest = async (email) => {
        if (!email) {
            return alert("No email received");
        }
        const response = await resetAdminUserPassword({ email });
        setResp(response);
        console.log(resp);
        resp.status === "success" && setPasswordForm("password");

    };

    const handleOnPasswordUpdate = data => {
        console.log(data);
    }

    const form = {
        otp: <RequestOTP handleOnOTPRequest={handleOnOTPRequest} />,
        password: <ResetPasswordForm handleOnPasswordUpdate={handleOnPasswordUpdate} />
    };

    return (
        <div>
            <Header />
            <Container className='py-5 page-main' >
                {resp.message &&
                    <Alert varia nt={resp.status === "success" ? "Success" : "danger"}>{resp.message}</Alert>
                }
                <div className='pass-forms'>{form[passwordFrom]}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ResetPassword