export const postPoem = (poem) => {
    return {
        type: "POST_POEM",
        payload: poem 
    }
};
