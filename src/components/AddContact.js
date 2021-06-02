//react
import { useState } from "react";
//redux
import { useDispatch } from "react-redux";
import { createNewContact } from "../store/asyncActions";
//bootstrap
import { Form, Button } from "react-bootstrap";
//styles
import './style.css'

const AddContact = () => {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({});
  const [success, setSuccess] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const createContact = async () => {
    const res = await dispatch(createNewContact(formValue));

    if (res) {
      setSuccess(true);
    }
  };

  return (
    <>
      {success ? (
        <h3 className="mt-4 add-contact">SUCCESS</h3>
      ) : (
        <div className="add-contact">
          <h2 className="mt-4">Add contact</h2>
          <Form.Control
            name="name"
            onChange={onChange}
            className="mt-4"
            placeholder="Name"
          />
          <Form.Control
            name="lastname"
            onChange={onChange}
            className="mt-4"
            placeholder="Surname"
          />
          <Form.Control
            name="age"
            onChange={onChange}
            className="mt-4"
            placeholder="Age"
          />
          <Form.Control
            name="pager"
            onChange={onChange}
            className="mt-4"
            placeholder="Pager"
          />
          <Button onClick={createContact} className="mt-4">
            Add new contact
          </Button>
        </div>
      )}
    </>
  );
};

export default AddContact;
