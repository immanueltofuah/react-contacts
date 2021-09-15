import logo from "./logo.svg";
import "./App.css";
import ContactsForm from "./components/ContactsForm";
import { useState } from "react";
import ContactList from "./components/ContactList";
function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <ContactsForm addUser={addUser} />
      <ContactList data={users} />
      {/* <ContactList addUser={addUser} />
      <ContactsForm data={users} /> */}
    </div>
  );
}

export default App;
