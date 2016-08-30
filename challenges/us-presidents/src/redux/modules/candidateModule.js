export const ADD_CANDIDATE = 'ADD_CANDIDATE';
export const ADD_MULTIPLE_CANDIDATES = 'ADD_MULTIPLE_CANDIDATES';

export const candidates = (state = [], action) => {
    switch(action.type){
        case ADD_CANDIDATE:
            return [
                ...state,
                action.payload
            ];
        case ADD_MULTIPLE_CANDIDATES:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
};