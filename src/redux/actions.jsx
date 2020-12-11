export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR_ITEM = 'CLEAR_ITEM';


let nextItemId = 0;

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: ++nextItemId,
      name: item
    },
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const clearItem = (item) => {
  console.log(item)
  alert('Wish list submitted to Santa!');
  return {
    type: CLEAR_ITEM,
    payload: [],
  };
};