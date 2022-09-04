import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction } from '../../pages/categories/categoryAction';
import { postProductAction } from '../../pages/products/productAction';
import { CustomInputField } from '../customInputField/CustomInputField';

const initialState = {
  status: "inactive",
  name: "",
  sku: "",
  qty: "",
  price: 0,
  salesPrice: null,
  salesStartDate: null,
  salesEndDate: null,
  description: "",
}

export const AddProductForm = () => {

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    !categories.length && dispatch(getCategoryAction());
  }, [categories, dispatch]);


  const [form, setForm] = useState(initialState);
  const [images, setImages] = useState([]);

  const inputFields = [
    {

      name: 'name',
      value: form.name,
      label: "Name",
      type: "text",
      placeholder: "Product Name",
      required: true
    },
    {

      name: 'sku',
      value: form.sku,
      label: "sku",
      type: "text",
      placeholder: "Product unique Name",
      required: true
    },
    {

      name: 'qty',
      value: form.qty,
      label: "qty",
      type: "number",
      placeholder: "40",
      required: true
    },
    {

      name: 'price',
      value: form.price,
      label: "price",
      type: "number",
      placeholder: "12",
      required: true,
      min:1,
    },
    {

      name: 'salesPrice',
      value: form.salesPrice,
      label: "Sales Price",
      type: "number",
      placeholder: "12",
      required: true
    },
    {

      name: 'salesStartDate',
      value: form.salesStartDate,
      label: "Sales start dte",
      type: "Date",
    },
    {

      name: 'salesEndDate',
      value: form.salesEndDate,
      label: "Sales End dte",
      type: "Date",
    },
    {

      name: 'description',
      value: form.description,
      label: "Description",
      type: "text",
      rows: 10,
      as: "textarea",
      placeholder: "Description of the products here....",
      required: true
    },
    {

      name: "images",
      type: "file",
      accept: "image/*",
      multiple: true,
      required:true,
    }

  ];

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    setImages(files);
    console.log(images);
  }

  const handleOnchange = (e) => {

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
    // set data with formdata
    let formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    //append images in data
    images.length && [...images].map((img) => formData.append('images', img));
    dispatch(postProductAction(formData));
  };

  return (

    <div>
      <Form className='py-5' onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            name="status"
            type="switch"
            label="status"
            checked={form.status === "active"}
            onChange={handleOnchange}
          />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Assign to category</Form.Label>
          <Form.Select name="catId" onChange={handleOnchange} required>
            <option value="">Select Category</option>
            {
              categories.length > 0 && categories.map((item) => !item.parentId && <option key={item._id} value={item._id}>{item.name}</option>)
            }
          </Form.Select>
        </Form.Group>
        {inputFields.map((item, i) => (
          <CustomInputField key={i} {...item} onChange={item.name === "images" ? handleOnImageSelect : handleOnchange} />
        ))}
        <Button type="submit">Submit</Button>
      </Form>

    </div>
  )
}
