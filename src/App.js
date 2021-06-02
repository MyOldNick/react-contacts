//react
import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "./store/asyncActions";
//bootstrap
import { Container } from "react-bootstrap";
//components
import AddContact from "./components/AddContact";
import TableComponent from "./components/Table";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsReducer.contacts);

  useEffect(() => {
    if (contacts.length <= 0) {
      dispatch(getAllContacts());
    }
  });
  return (
    <Container>
      <AddContact />
      <TableComponent contacts={contacts} />
    </Container>
  );
};

export default App;
