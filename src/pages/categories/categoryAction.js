import { toast } from "react-toastify";
import { deleteCategory, fetchCategory, postCategory, updateCategory } from "../../helpers/axiosHelper"
import { setCategories } from "./categorySlice";

export const getCategoryAction = () => async (dispatch) => {

    const { status, categories } = await fetchCategory();
    status === "success" && dispatch(setCategories(categories));

}

// Post categories to database

export const postCategoryAction = (data) => async (dispatch) => {
    const pormisePending = postCategory(data);
    toast.promise(pormisePending, { pending: "Please wait..." });

    const { status, message } = await pormisePending;
    toast[status](message);
    status === "success" && dispatch(getCategoryAction());

}

///updating the categories 

export const updateCategoryAction = (data) => async (dispatch) => {
    const pormisePending = updateCategory(data);
    toast.promise(pormisePending, { pending: "Please wait..." });

    const { status, message } = await pormisePending;
    toast[status](message);
    status === "success" && dispatch(getCategoryAction());
}


//deleting the categories
export const deleteCategoryAction = (_id) => async (dispatch) => {
    const pormisePending = deleteCategory(_id);
    toast.promise(pormisePending, { pending: "Please wait ..." });

    const { status, message } = await pormisePending;
    toast[status](message);

    status === "success" && dispatch(getCategoryAction());
};
