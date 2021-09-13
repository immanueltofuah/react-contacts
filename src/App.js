import logo from './logo.svg';
import './App.css';
import ContactsForm from './components/ContactsForm';
import Contacts from './components/Contacts';
function App() {
  const [ users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users,user]);
  }

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
