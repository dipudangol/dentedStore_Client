import { toast } from 'react-toastify';
import { fetchProduct, postProduct } from '../../helpers/axiosHelper';
import { setProducts } from "./productSlice";

export const getProductsAction = () => async (dispatch) => {
    const { status, products } = await fetchProduct();
    status === "success" && dispatch(setProducts(products));
}

// posting products to database
export const postProductAction = (data) => async (dispatch) => {
    const pormisePending = postProduct(data);
    toast.promise(pormisePending, { pending: "Please wait..." });

    const { status, message } = await pormisePending;
    toast[status](message);
    status === "success" && dispatch(getProductsAction());

}