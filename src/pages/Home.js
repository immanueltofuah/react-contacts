import React,{useEffect} from "react";
import ContactForm from "../components/ContactsForm";
import ContactList from "../components/ContactList";
import { signOut } from "../components/actions/authAction";
import { useDispatch, connect } from "react-redux";
import { reactReduxFirebase } from "react-redux-firebase";
import { getAllUsers } from "../components/actions/userActions";

function Home(props) {
    useEffect(() => {
		props.getAllUsers();
	}, []);
 
  return (
    <div>
        <button onClick={() => props.signOut()}>Sign out</button>
      <UserForm 
      />
      <UserList/>
    </div>
  );
}
const mapDispatchToProps = {
  getAllUsers: getAllUsers, signOut
};
  
  export default connect(null, mapDispatchToProps)(Home);