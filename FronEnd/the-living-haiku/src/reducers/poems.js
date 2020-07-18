const { POST_POEMS } = require("../actions/types");
import { initalState } from "../store"

const poemsReducer = (state = initalState, action) => {
    switch(action.type){
        case POST_POEMS: 
            return Object.assign({}, state, {
                haiku: action.payload
            })
    }
}

export default poemsReducer;