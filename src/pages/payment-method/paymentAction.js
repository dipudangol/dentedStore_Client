import { toast } from "react-toastify";
import { deletePM, fetchPM, postPM } from "../../helpers/axiosHelper"
import { setModalShow } from "../system-state/systemSlice";
import { setPaymentMethods } from './paymentSlice';


//getting the payment method from database
export const getPMAction = () => async (dispatch) => {
    const { status, pm } = await fetchPM();

    status === "success" && dispatch(setPaymentMethods(pm));
};


// posting payment method to database
export const postPMAction = (data) => async (dispatch) => {
    const pormisePending = postPM(data);
    toast.promise(pormisePending, { pending: "Please wait..." });

    const { status, message } = await pormisePending;
    toast[status](message);
    status === "success"  && dispatch(setModalShow()) && dispatch(getPMAction());

}

///updating the categories

// export const updatePMAction = (data) => async (dispatch) => {
//     const pormisePending = updateCategory(data);
//     toast.promise(pormisePending, { pending: "Please wait..." });

//     const { status, message } = await pormisePending;
//     toast[status](message);
//     status === "success" && dispatch(getCategoryAction());
// }


//deleting the categories
export const deletePMAction = (_id) => async (dispatch) => {
    const pormisePending = deletePM(_id);
    toast.promise(pormisePending, { pending: "Please wait ..." });

    const { status, message } = await pormisePending;
    toast[status](message);

    status === "success" && dispatch(getPMAction());
};
