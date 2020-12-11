import {
  ADD_ITEM,
  DELETE_ITEM,
  CLEAR_ITEM,
} from './actions';

const initialState = [];

// Complete the three cases below
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return [...state.filter(item => item.id !== action.payload)]
    case CLEAR_ITEM:
      return [action.payload];
  }
};

export default reducer;