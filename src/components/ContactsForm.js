import React, { useState } from "react";

function ContactsForm(props) {
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");

 function handleSubmit(e) {
    e.preventDefault();

    let user = {
        name: name,
        phonenumber: phonenumber,
        location: location,
    };
    props.addUser(user);

    setName("");
    setPhoneNumber("");
    setLocation("");

 } 
 return (
     <form onSubmit={(e) => handleSubmit(e)}>
         <input
          type="text"
          name="fullname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />

          <input 
          type="number"
          name="phonenumber"
          value={number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
          type="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          />
        
        <input type="submit" />
        </form>
          
          );
    }

export default ContactsForm; 
  

