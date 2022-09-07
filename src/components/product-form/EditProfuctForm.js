import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction } from '../../pages/categories/categoryAction';
import { postProductAction, updateProductAction } from '../../pages/products/productAction';
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
  thumbnail: '',
}

export const EditProductForm = () => {
  const [form, setForm] = useState(initialState);
  const [imageToDelete, setImageToDelete] = useState([]);

  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.products);

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    !categories.length && dispatch(getCategoryAction());
    setForm(selectedProduct);
  }, [categories, dispatch, selectedProduct]);


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
      required: true,
      disabled: true
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
      min: 1,
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
    const { slug, sku, rating, createdAt, updatedAt, __v, ...rest } = form;
    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    // //append images in data
    // dispatch(postProductAction(formData));

    //attach the images to append formdata 
    [...images].map((img) => formData.append('newImages', img));
    formData.append("imgToDelete", imageToDelete);
    console.log(formData);
    dispatch(updateProductAction(formData));
  };

  const handleOnImageDelete = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setImageToDelete([...imageToDelete, value]);
    } else {
      setImageToDelete(imageToDelete.filter((img) => img !== value));
    }
  }

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
              categories.length > 0 && categories.map((item) =>
                !item.parentId && <option
                  key={item._id} value={item._id}
                  selected={item._id === form.catId}
                >{item.name}</option>)
            }
          </Form.Select>
        </Form.Group>
        {inputFields.map((item, i) => (
          <CustomInputField key={i} {...item} onChange={item.name === "images" ? handleOnImageSelect : handleOnchange} />
        ))}
        <div className='my-5 d-flex flex-wrap'>
          {
            selectedProduct.images &&
            selectedProduct.images.length &&
            selectedProduct.images.map(imgLink => (
              <div className="p-1">
                <Form.Check
                  type="radio"
                  label="use as thumbnail"
                  value={imgLink}
                  name="thumbnail"
                  onChange={handleOnchange}
                  checked={imgLink === form.thumbnail}
                />
                < img src={process.env.REACT_APP_SERVER_POINT + imgLink} width="150px"
                  alt=""
                  crossOrigin="anonymous" />

                <Form.Check
                  label="Delete"
                  onChange={handleOnImageDelete}
                  value={imgLink} />
              </div>

            ))}
        </div>
        <Button type="submit">Update Product</Button>
      </Form>

    </div>
  )
}
