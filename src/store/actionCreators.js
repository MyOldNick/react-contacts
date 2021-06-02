//action types
import { GET_CONTACTS, CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./actionTypes";

export const getContacts = (data) => ({ type: GET_CONTACTS, payload: data });

export const createContact = (data) => ({ type: CREATE_CONTACT, payload: data });

export const deleteContact = (id) => ({ type: DELETE_CONTACT, payload: id });

export const updateContact = (data) => ({ type: UPDATE_CONTACT, payload: data })
