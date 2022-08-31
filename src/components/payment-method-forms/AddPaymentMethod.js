import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { postPMAction } from '../../pages/payment-method/paymentAction';
import { CustomInputField } from '../customInputField/CustomInputField'
import { CustomModal } from '../model/Model'

const initialState = {
    status: "",
    name: "",
    description: ""
};

export const AddPaymentMethod = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState(initialState);

    const handleOnChange = (e) => {
        let { checked, name, value } = e.target;
        if (name === "status") {
            value = checked ? "active" : "inactive";
        }
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(postPMAction(form));

    }

    const inputFields = [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
            placeholder: "Enter category",

        },
        {
            name: "description",
            label: "Description",
            type: "text",
            as: "textarea",
            required: true,
            placeholder: "Write some information",

        },
    ]


    return (
        <CustomModal title="Add new payment method">
            <Form onSubmit={handleOnSubmit}>
                <Form.Group >
                    <Form.Check
                        type="switch"
                        name="status"
                        label="status"
                        onChange={handleOnChange}
                    />

                </Form.Group>
                {
                    inputFields.map((item, i) => (
                        <CustomInputField key={i} {...item}
                            onChange={handleOnChange}
                        />
                    ))
                }
                <Form.Group>
                    <Button variant="success" type="submit">Add Payment Method</Button>
                </Form.Group>
            </Form>
        </CustomModal>
    )
}
