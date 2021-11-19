import "./App.css";
import ContactsForm from "./components/ContactsForm";
import { useState, useEffect} from "react";
import ContactList from "./components/ContactList";
import {connect} from "react-redux";
import {getAllUsers} from "./components/actions/userActions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/Register";


function App(){  
  return (
   <BrowserRouter>
 <ProtectedRoute exact path="/" component={Home} />
 <Route path="/login" component={Login} />
 <Route path="/register" component={Register} />
 </BrowserRouter>
 );
 }
  
   
 
 export default App;
