//action creators
import {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
} from "./actionCreators";

//constants
import { API } from "../constants/API";

export const getAllContacts = () => {
  return (dispatch) => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => dispatch(getContacts(res)));
  };
};

export const createNewContact = (data) => {
  return async (dispatch) => {
    const body = JSON.stringify(data);

    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const contact = await res.json();

    if (contact) {
      dispatch(createContact(contact));

      return true;
    }
  };
};

export const deleteOneContact = (id) => {
  return async (dispatch) => {
    const body = JSON.stringify({ id });

    dispatch(deleteContact(id));

    fetch(API, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  };
};

export const updateOneContact = (id, data) => {
  return async (dispatch) => {
    const body = JSON.stringify({ id, data });

    const res = await fetch(API, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const contact = await res.json();

    dispatch(updateContact(contact));
  };
};
