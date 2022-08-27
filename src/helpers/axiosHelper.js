import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "/admin-user";
const categoryEP = rootUrl + "/category";



const apiProcessor = async ({ method, url, data }) => {
    try {
        const response = await axios({
            method,
            url,
            data
        });
        return response.data;

    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }

    }
}


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


//====================================categories===============

export const fetchCategory = (_id) => {
    const option = {
        method: "get",
        url: _id ? categoryEP + "/" + _id : categoryEP
    }
    return apiProcessor(option);
}


// Post categories
export const postCategory = (data) => {
    const option = {
        method: "post",
        url: categoryEP,
        data
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