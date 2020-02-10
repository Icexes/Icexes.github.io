import {TOGGLE_SEARCH_FIELD, TOGGLE_MOBILE_MENU} from '../actions/actions'

const initialState = {
    searchFieldIsOpen: false,
    mobileMenuIsOpen: false
}

 export default function app(state=initialState, action) {
    switch(action.type) {
        case TOGGLE_SEARCH_FIELD :
            return Object.assign({}, state, {searchFieldIsOpen : !state.searchFieldIsOpen})
        case TOGGLE_MOBILE_MENU :
            return Object.assign({}, state, {mobileMenuIsOpen: !state.mobileMenuIsOpen})
        default:
            return state
    }
} 