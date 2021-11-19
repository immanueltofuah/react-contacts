import React,{useEffect} from "react";
import ContactForm from "../components/ContactsForm";
import ContactList from "../components/ContactList";


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