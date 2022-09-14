import React, { useEffect, useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { RequestOTP } from '../../components/reset-password/RequestOTP'
import { ResetPasswordForm } from '../../components/reset-password/ResetPasswordForm'
import { requestOtpresetAdminUserPassword, resetAdminUserPassword } from '../../helpers/axiosHelper'


const ResetPassword = () => {
    const [passwordFrom, setPasswordForm] = useState("otp");
    useEffect(() => setPasswordForm(passwordFrom), [passwordFrom]);
    const [resp, setResp] = useState({});
    const [userEmail, setUserEmail] = useState("");

    const handleOnOTPRequest = async (email) => {
        if (!email) {
            return alert("No email received");
        }
        setUserEmail(email);
        const response = await requestOtpresetAdminUserPassword({ email });
        setResp(response);
        resp.status === "success" && setPasswordForm("password");

    };

    const handleOnPasswordUpdate = async (data) => {
        data.email = userEmail;
        const response = await resetAdminUserPassword(data);
        setResp(response);
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