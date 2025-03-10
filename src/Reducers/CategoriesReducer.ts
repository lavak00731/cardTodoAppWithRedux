import { CREATECATEGORY, MODIFYCATEGORY } from "../Constants/reducerConstants";
import CategoryType from "../Interfaces/CategoryType";

interface actionInt {
    type: string,
    payload: CategoryType[],
}

const initialState = {
    items: []
}


const CategoriesReducer = (state = initialState, action:actionInt)=>{ 
    switch (action.type) {
        case CREATECATEGORY:
        case MODIFYCATEGORY:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
export default CategoriesReducer;