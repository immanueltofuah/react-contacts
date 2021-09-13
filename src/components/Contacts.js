import React from "react";

function ContactList(props) {

    const users = props.data;

  return (
      <div>
        {
            users.map((user, index) => {
                return (
                  <div key={index}>
                    <h1>{user.name}</h1>
                    <h2>{user.phonenumber}</h2>
                    <h3>{user.location}</h3> 
                  </div> 
                );
            })
        }

      </div>
  );
}
export default Contantlist;