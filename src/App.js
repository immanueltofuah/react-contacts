import "./App.css";
import ContactsForm from "./components/ContactsForm";
import { useState, useEffect} from "react";
import ContactList from "./components/ContactList";
import {connect} from "react-redux";
import {getAllUsers} from "./components/actions/userActions";
function App(props) {
  const [users, setUsers] = useState([]);

  

   //function to edit user
   function editUser(newDetails, userId) {
    //maps through the users array and updates
    //the user with the same user id
    const u = users.map((user) => {
      if (userId === user.id) {
        return newDetails;
      } else {
        return user;
      }
    });

     //updates the users state to contain the edited user
     setUsers(u);
    }

    //funtion to delete a user
  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredUsers);
  }

  useEffect(()=>{
    props.getAllUsers();
  },[]);

  return (
    <div>
      <ContactsForm />
      <ContactList  />
    </div>
  );
}
const mapDispatchToProps = {
  getAllUsers,
}

export default connect(null, mapDispatchToProps)(App);
