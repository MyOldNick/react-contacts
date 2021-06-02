//bootstrap
import { Form, Button } from "react-bootstrap";
//react
import { useState } from "react";

const Settings = ({ action }) => {
  const [formValue, setFormValue] = useState({});

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };
  
  return (
    <div>
      <Form.Control
        name="name"
        onChange={onChange}
        className="mt-2"
        placeholder="Name"
      />
      <Form.Control
        name="lastname"
        onChange={onChange}
        className="mt-2"
        placeholder="Last Name"
      />
      <Form.Control
        name="age"
        onChange={onChange}
        className="mt-2"
        placeholder="Age"
      />
      <Form.Control
        name="pager"
        onChange={onChange}
        className="mt-2"
        placeholder="Pager"
      />
      <Button onClick={() => action(formValue)} className="mt-2">
        Update
      </Button>
    </div>
  );
};

export default Settings;
