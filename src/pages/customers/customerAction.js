import { fetchUsers } from "../../helpers/axiosHelper";
import { setusers } from "./customerSlice";

export const getUsers = () => async (dispatch) => {
    const { status, users } = await fetchUsers();
    dispatch(setusers(users));

}
