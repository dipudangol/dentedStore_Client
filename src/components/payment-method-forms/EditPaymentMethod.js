import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { updatePM } from '../../helpers/axiosHelper';
import { postPMAction, updatePMAction } from '../../pages/payment-method/paymentAction';
import { CustomInputField } from '../customInputField/CustomInputField'
import { CustomModal } from '../model/Model'

const initialState = {
    status: "",
    name: "",
    description: ""
};

export const EditPaymentMethod = () => {
    const dispatch = useDispatch();
    const { selectedPM } = useSelector(state => state.paymentMethod);

    const [form, setForm] = useState(initialState);

    useEffect(() => {
        setForm(selectedPM)
    }, [selectedPM]);

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
        const { createdAt, updatedAt, __v, ...rest} = form;
        console.log(rest)
        dispatch(updatePMAction(rest));

    }

    const inputFields = [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
            placeholder: "Enter category",
            value: form.name,

        },
        {
            name: "description",
            label: "Description",
            type: "text",
            as: "textarea",
            required: true,
            placeholder: "Write some information",
            value: form.description,

        },
    ]


    return (
        <CustomModal title="Edit payment method">
            <Form onSubmit={handleOnSubmit}>
                <Form.Group >
                    <Form.Check
                        type="switch"
                        name="status"
                        label="status"
                        onChange={handleOnChange}
                        checked={form.status === "active"}
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
                    <Button variant="success" type="submit">Update Payment Method</Button>
                </Form.Group>
            </Form>
        </CustomModal>
    )
}
