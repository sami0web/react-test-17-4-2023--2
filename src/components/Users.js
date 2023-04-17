import React from 'react';
import './Users.css';
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

function Users() {
  const [Users, setUsers] = useState([]);

  const Newdata = {
    first_name: 'Sami',
    last_name: 'the king',
    email: 'john.doe@example.com'}


const PATCH_Data = ()=> {   
  fetch('https://reqres.in/api/users/2', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(Newdata)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
   }

   const GET_Data = ()=> {   
    fetch('https://reqres.in/api/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
     }


  return (
    <div className="cont">
      <h1 className="h1">Liste des utilisateurs</h1>
      <button  onClick={GET_Data}>  Requête GET
      </button>
      <button  onClick={PATCH_Data}>  Requête PATCH
      </button>


      <div className="cartes">
        {Users.map((user, index) => (
          <div key={Users.id}>
            <CardComponent
              Name={user.first_name + ' ' + user.last_name}
              id={user.id}
              Email={user.email}
              img={user.avatar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
