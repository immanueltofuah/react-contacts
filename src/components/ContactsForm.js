import React, { useState } from "react";
//package to generate unique id
import { v4 as uuid } from "uuid";

function ContactsForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && name) {
      let newUser = {
        name: name,
        email: email,
        location: location,
        //adds a unique id to the new user
        id: uuid(),
      };

      props.addUser(newUser);

      setName("");
      setEmail("");
      setLocation("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
      placeholder="Full Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        placeholder="Location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default ContactsForm;