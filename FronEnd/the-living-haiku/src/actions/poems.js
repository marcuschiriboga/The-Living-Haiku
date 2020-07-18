import * as actionTypes from './types';

export const postPoem = (poem) => {
    return {
        type: actionTypes.POST_POEM,
        payload: poem
    }
};
