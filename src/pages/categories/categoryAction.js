import { fetchCategory } from "../../helpers/axiosHelper"
import { setCategories } from "./categorySlice";

export const getCategoryAction = () => async (dispatch) => {

    const { status, categories } = await fetchCategory();
    status === "success" && dispatch(setCategories(categories));

} 