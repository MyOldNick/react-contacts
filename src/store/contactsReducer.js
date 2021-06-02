//action types
import { GET_CONTACTS, CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./actionTypes";
//initial state
const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: payload };

    case CREATE_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(({ _id }) => _id !== payload),
      };

    case UPDATE_CONTACT:
        const index = state.contacts.findIndex(el => el._id === payload._id)

        const arr = [...state.contacts]

        arr.splice(index, 1, payload)

        return {...state, contacts: arr}

    default:
      return state;
  }
};

export default contactsReducer;
