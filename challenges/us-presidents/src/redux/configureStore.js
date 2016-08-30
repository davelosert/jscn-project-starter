// READ: http://redux.js.org/docs/api/createStore.html

import sampleModuleReducer from './modules/sampleModule';
import {combineReducers, createStore} from 'redux';
import {ADD_MULTIPLE_CANDIDATES, ADD_CANDIDATE, candidates} from './modules/candidateModule';


export default (defaultState) => {
    // TODO: Return a new redux store
};


export const VOTE = 'VOTE';
export const vote = (state = 0, action) => {
    switch (action.type) {
        case VOTE:
            return state +1 ;
        default:
            return state;
    }
};


export const store = createStore(combineReducers({
    vote,
    candidates
}));


let initialState = {
    candidates: [],
    votes: []
}


store.subscribe((state) => {
    console.log('state updated!');
});
store.dispatch(VOTE);
