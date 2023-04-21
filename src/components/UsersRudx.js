import React from 'react';
import './UsersRudx.css';
import React, { useState, useEffect, useReducer  } from 'react';
import CardComponent from './CardComponent';
import UserReducer from './Store/Reducer';
import Newtab from './Newtab';


function UsersRudx() {

 
  const [Users, setUsers] = useState({});
  const [state, dispatch] = useReducer(UserReducer,[]);

  const Commencer=  async  () => {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    dispatch({ type: 'Load', donnes: data.data });
    
  };


console.log( state)
 
  const [inputValue, setInputValue] = useState({});

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isIndex, setisIndex] = useState();


  
    const handleInputChangefirst_name = (event) => {setInputValue({...inputValue,first_name:event.target.value});}

    const handleInputChangelast_name = (event) => {setInputValue({...inputValue,last_name:event.target.value});}


    const handleInputChangeEmail = (event) => {setInputValue({...inputValue,email:event.target.value});}


    const Modif=(index) => { 
      setInputValue(state[index]),
     (index===isIndex)&& isInputVisible && dispatch({ type: 'Modif',first_name:inputValue.first_name, last_name:inputValue.last_name,email:inputValue.email, index:isIndex });

      setIsInputVisible(!isInputVisible) ;

     setisIndex(index) } 



    const Supr=(index) => dispatch({ type: 'Supr',index:index})


    




  return (


    
    <div className="cont">
      <h1 className="h1">Liste des utilisateurs</h1>
      {Users ? <p>{state.first_name} {state.last_name}</p> : <p>Loading...</p>}


      <div>
  
      <button onClick={() => Commencer()   } >Commencer</button>
   
         </div>
         
         
       <Newtab/>
     
  
  <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th>image de prfl</th>
            <th></th>
            <th></th>
          </tr>
        </thead>


        {state.map((user, index) => (
        <tbody key={index}>

       
           <tr >
         
         
              <td>{index  +   user.first_name }</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td> <img  className="img prfl"src={user.avatar}alt="image de prfl" /></td>

              <td><button onClick={() => Modif(index)  }>Modif+{isIndex}</button></td>

              <td> <button onClick={() => Supr(index)}>Supr</button></td>
            </tr>
 
  
           {(isIndex===index)&&isInputVisible &&<tr  className='hiden'>

               

              <td>
              <input  type="text" id="input-text"  placeholder ='first name' 
               onChange={handleInputChangefirst_name} />  </td>
               
             
              <td>
                <input  type="text" id="input-text" placeholder ='last Name'
                onChange={handleInputChangelast_name} />  </td>
              
      
            
              <td>
                <input  type="email" id="email" placeholder ='E-mail'
                 onChange={handleInputChangeEmail}/>  </td>
              <td> </td>
              <td></td>
              <td> </td>
  
            </tr>} 
          
            
  
  
        </tbody>
         ))}
         </table>
  
  
  















    
    </div>
  );
}

export default UsersRudx;