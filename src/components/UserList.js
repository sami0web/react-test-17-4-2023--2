import React from 'react';
import './UserList.css';
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);

  return (

   
    <div>
      <h1>Liste des utilisateurs</h1>
     
  <>
       {users.map((user,index) => (
          <div key={index}>
          <CardComponent Name ={user.name} id= {index} Phone={user.phone} Email={user.email} img={user.picture.large}  /> 

          </div>
        ))}    
      </>
     
    
    </div>
  );
}

export default UserList;