import { fetchPM } from "../../helpers/axiosHelper"
import {setPaymentMethods} from './paymentSlice';

export const getPMAction = () => async(dispatch) => {
    const { status, pm } = await fetchPM();

    status === "success" && dispatch(setPaymentMethods(pm));
};