const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}
//REDUCER
// there can be multiple reducers, but all gets combine into one reducer
// it is the only thing that may update the state in the end
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
         return {
             ...state, 
             counter: state.counter + 1
         };
         // using spread operator coz dont update direct to state, instead do immutably
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state, 
            counter: state.counter + action.value
        };
        // using spread operator coz dont update direct to state, instead do immutably
    }
    return state;
}

//STORE
// a store needs to be initialised with reducer
const store = createStore(rootReducer);

//SUBSCRIPTION
// whenever an action is dispatched subscribtion is called
store.subscribe(() => {
    console.log(store.getState());
})

//DISPATCHING ACTION
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10})

