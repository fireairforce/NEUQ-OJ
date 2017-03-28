/**
 * Created by out_xu on 16/12/20.
 */
import {SET_HOMEPAGE_INFO,SET_HOME_NEWS} from "../actions/type";

const init_home = {
    home: {},
    news: {}
};
export default function home(state = init_home, action) {
    switch (action.type) {
        case SET_HOMEPAGE_INFO:
            return {
                ...state,
                home: action.payload
            };
        case SET_HOME_NEWS:
            return {
                ...state,
                homenews: action.payload
            };
        default:
            return state;
    }
}
