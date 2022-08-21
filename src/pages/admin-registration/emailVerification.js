import React, { useEffect, useState } from 'react'
import { Alert, Card, Container, Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { emailVerifyAdminUser } from '../../helpers/axiosHelper';




const EmailVerification = () => {



    const [isPending, setIsPending] = useState(true);
    const [response, SetResponse] = useState({});
    const [queryParams] = useSearchParams();


    useEffect(() => {
        const obj = {
            emailValidationCode: queryParams.get("c"),
            email: queryParams.get("e"),

        };
        //call axios to call the server, iif function
        (async () => {
            const result = await emailVerifyAdminUser(obj);
            SetResponse(result);
            setIsPending(false);
        }
        )()
    }, [queryParams])
    return (
        <div>
            <Header />
            <Container className="page-main">
                {isPending && (
                    <Card className="mt-5 p-4 m-auto ">
                        <h2>Email verification process is happening..</h2>
                        <Spinner variant="success" animation="border" className='m-auto mt-4'></Spinner>
                    </Card>
                )}
                {
                    response.message &&(
                    <Alert className="m-auto mt-10" variant={response.status === "success" ? "success" : "danger"}>{response.message}</Alert>
                    )}


            </Container>

            <Footer />
        </div>
    )
}

export default EmailVerification;
