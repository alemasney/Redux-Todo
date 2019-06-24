import { ADD_ITEM } from '../actions';

const initialState = {
    todos: []
}

const reducer = ( state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_ITEM: 
            return {
                todos: [
                    ...state,
                    {
                        value: action.payload,
                        completed: false
                    }
                ]
            }
        default: 
            return state;
    }
}

export default reducer;