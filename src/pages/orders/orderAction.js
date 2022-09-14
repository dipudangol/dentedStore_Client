import { fetchOrders } from "../../helpers/axiosHelper";
import { setOrders, setSelectedOrders } from "./orderSlice";

export const getOrders = () => async (dispatch) => {
    const { status, orders } = await fetchOrders();
    dispatch(setOrders(orders));

}


export const getSingleOrder = (_id) => async (dispatch) => {
    const { status, orders } = await fetchOrders(_id);
    status === "success" && dispatch(setSelectedOrders(orders));

}