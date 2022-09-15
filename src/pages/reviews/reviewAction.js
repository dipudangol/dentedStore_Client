import { fetchReviews } from "../../helpers/axiosHelper";
import { setReviews } from "./reviewSlice";

export const getReviews = () => async (dispatch) => {
    const { status, reviews } = await fetchReviews();
    dispatch(setReviews(reviews));

}
