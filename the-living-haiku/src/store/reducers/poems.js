const { POST_POEMS, DELETE_POEM, GET_POEM, GET_POEMS } = require("../actions/types");
import { initalState } from "../store"

const poemsReducer = (state = initalState, action) => {
    switch(action.type){
        case POST_POEMS: 
            return Object.assign({}, state, {
                haiku: action.payload
            })
        case DELETE_POEM:
            //should help filter the poems we dont want
            const newState = state.filter((poem) => poem === action.payload)
            return Object.assign({}, newState)
        case GET_POEM:
            return Object.assign({}, action.payload)
        case GET_POEMS:
            const poemsArray = state.map((eachPoem) => {
                //eachPoem.id? or eachPoem.user? etc
                if (eachPoem === action.payload){
                    return poemsArray.push(eachPoem)
                }
            })
            return Object.assign({}, poemsArray)
        default:
            return state;
    }
}

export default poemsReducer;