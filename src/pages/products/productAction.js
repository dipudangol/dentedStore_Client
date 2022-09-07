import { toast } from 'react-toastify';
import { deleteProduct, fetchProduct, postProduct, updateProduct } from '../../helpers/axiosHelper';
import { setProducts, setSelectedProduct } from "./productSlice";

export const getProductsAction = () => async (dispatch) => {
    const { status, products } = await fetchProduct();
    status === "success" && dispatch(setProducts(products));
}

// get one products
export const getSingleProductsAction = (_id) => async (dispatch) => {
    const { status, products } = await fetchProduct(_id);
    status === "success" && dispatch(setSelectedProduct(products));
}

// posting products to database
export const postProductAction = async (data) => {
    const pormisePending = postProduct(data);
    toast.promise(pormisePending, { pending: "Please wait..." });

    const { status, message } = await pormisePending;
    toast[status](message);

}

// update products to database
export const updateProductAction = async (data) => {
    const pormisePending = updateProduct(data);
    toast.promise(pormisePending, { pending: "Please wait..." });

    const { status, message } = await pormisePending;
    toast[status](message);

}

// delete the product and images
export const deleteProductAction = async (_id, data) => {
    const pormisePending = deleteProduct(_id, data);
    toast.promise(pormisePending, { pending: "Please wait..." });

    const { status, message } = await pormisePending;
    toast[status](message);
}

