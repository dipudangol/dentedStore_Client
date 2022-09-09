import { getAdminUser, getNewAccessJWT, loginAdminUser, updateAdminUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify"
import { setAdminUser } from "./userSlice";


export const loginUserAction = (data) => async (dispatch) => {
    const resultPromise = loginAdminUser(data);

    toast.promise(resultPromise, { pending: "please wait.." });
    const { status, message, user, accessJWT, refreshJWT } = await resultPromise
    toast[status](status, {
        theme: "dark"
    })

    if (status === "success") {
        sessionStorage.setItem("accessJWT", accessJWT);
        localStorage.setItem("refreshJWT", refreshJWT);
        dispatch(setAdminUser(user));
    }

};


export const logoutAdminAction = () => dispatch => {
    dispatch(setAdminUser({}));
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
};



//fetch user and mount in redux
export const getAdminUserAction = () => async (dispatch) => {
    const { status, message, user } = await getAdminUser();
    // console.log(user);
    status === "success" && dispatch(setAdminUser(user));
};

//autoloogin
export const autoLoginAction = () => async (dispatch) => {
    const accessJWT = sessionStorage.getItem("accessJWT");
    const refreshJWT = localStorage.getItem("refreshJWT");


    if (accessJWT) {
        dispatch(getAdminUserAction());


    } else if (refreshJWT) {
        const token = await getNewAccessJWT();
        token ? dispatch(getAdminUserAction()) : dispatch(logoutAdminAction());
    } else {
        dispatch(logoutAdminAction());
    }
};


export const updateAdminProfileAction = data => async (dispatch) => {
    const promisePending = updateAdminUser(data);
    toast.promise(promisePending, { pending: "please wait..." });
    const { status, message } = await promisePending;
    toast[status](message);

    status === "success" && dispatch(getAdminUserAction());
}