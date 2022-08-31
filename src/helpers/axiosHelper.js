import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "/admin-user";
const categoryEP = rootUrl + "/category";
const PMEP = rootUrl + "/payment-method";



const apiProcessor = async ({ method, url, data, isPrivate, token }) => {
    try {
        const headers = isPrivate ? { Authorization: sessionStorage.getItem("accessJWT") || token } : null;

        const response = await axios({
            method,
            url,
            data,
            headers,
        });
        return response.data;

    } catch (error) {
        let message = error.message;
        if (error.response && error.response.status === 401) {
            sessionStorage.removeItem("accessJWT");
            localStorage.removeItem("refreshJWT");
        }

        if (error.response && error.response.data) {
            message = error.response.data.message;
        }

        if (message === "jwt expired") {
            const accessJWT = await getNewAccessJWT()
            if (accessJWT) {
                return apiProcessor({ method, url, data, isPrivate, token });
            }
        }
        return {
            status: "error",
            message: error.message,
        }

    }
}

//====================================================Admin Users==========================================================================
//post new admin user
export const postUser = (data) => {
    const option = {
        method: "post",
        url: adminUserEP,
        data,
    }
    return apiProcessor(option);
}

//verify admin user
export const emailVerifyAdminUser = (data) => {
    const option = {
        method: "patch",
        url: adminUserEP + "/verify-email",
        data,
    }
    return apiProcessor(option);
}

//login admin user
export const loginAdminUser = (data) => {
    const option = {
        method: "post",
        url: adminUserEP + "/login",
        data,
    }
    return apiProcessor(option);
}


//FETCH admin user
export const getAdminUser = () => {
    const option = {
        method: "get",
        url: adminUserEP,
        isPrivate: true,
    }
    return apiProcessor(option);
}

//FETCH new accessToken
export const getNewAccessJWT = async () => {
    const token = localStorage.getItem("refreshJWT");
    const option = {
        method: "get",
        url: adminUserEP + "/accessjwt",
        isPrivate: true,
        token,
    }
    const { status, accessJWT } = await apiProcessor(option);
    console.log(status, accessJWT);
    status === "success" && sessionStorage.setItem("accessJWT", accessJWT);
    return accessJWT;
}


//=========================================================Categories=========================================================================

export const fetchCategory = (_id) => {
    const option = {
        method: "get",
        url: _id ? categoryEP + "/" + _id : categoryEP,
        isPrivate: true,
    }
    return apiProcessor(option);
}


// Post new category
export const postCategory = (data) => {
    const option = {
        method: "post",
        url: categoryEP,
        data,
        isPrivate: true,
    }
    return apiProcessor(option);
}


// update categories
export const updateCategory = (data) => {
    const option = {
        method: "put",
        url: categoryEP,
        data,
        isPrivate: true,
    }
    return apiProcessor(option);
}


//delete categories
export const deleteCategory = (_id) => {
    const option = {
        method: "delete",
        url: categoryEP + '/' + _id,
        isPrivate: true,
    }
    return apiProcessor(option);
}


// ========================payment Method==============

export const fetchPM = () => {
    const option = {
        method: "get",
        url:  PMEP ,
        isPrivate: true,
    }
    return apiProcessor(option);
}


// Post new category
export const postPM = (data) => {
    const option = {
        method: "post",
        url: PMEP,
        data,
        isPrivate: true,
    }
    return apiProcessor(option);
}

export const deletePM = (_id) => {
    const option = {
        method: "delete",
        url: PMEP + '/' + _id,
        isPrivate: true,
    }
    return apiProcessor(option);
}

