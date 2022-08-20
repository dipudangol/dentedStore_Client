import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "/admin-user";


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