//react
import { useState } from "react";
//bootstrap
import { Table, Button, Modal } from "react-bootstrap";
//redux
//можно прокинуть пропсами готовый ивент с App.js, но нужно же хоть где-то использовать редакс
import { useDispatch } from "react-redux";
import { deleteOneContact, updateOneContact } from "../store/asyncActions";
//components
import Settings from "./Settings";

const TableComponent = ({ contacts }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState(null)

  const deleteContact = (id) => dispatch(deleteOneContact(id));

  const handleClose = () => {
    setShow(false);
    setActiveId(null)
  }

  const handleShow = (id) => {
    setShow(true)
    setActiveId(id)
  };

  const update = (data) => {
    dispatch(updateOneContact(activeId, data))

    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Settings action={update}/>
        </Modal.Body>
      </Modal>
      <Table className="mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Pager</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map(({ _id, name, lastname, age, pager }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{lastname}</td>
              <td>{age}</td>
              <td>{pager}</td>
              <td>
                <Button onClick={() => deleteContact(_id)} variant="danger">
                  Delete
                </Button>
                <Button onClick={() => handleShow(_id)} variant="success" className="ml-2">
                  Settings
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
