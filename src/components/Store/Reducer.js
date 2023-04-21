import { createStore } from 'redux';

import { Modif, Supr } from '/actions.js';




function UserReducer(state, action) {
  switch (action.type) {

    case 'Load':
      return (state=action.donnes);



    case 'Modif':

    console.log("action.index"+action.index )
    
      return (state.map((user, index) => (

        ( action.index=== index )?{...user,first_name:action.first_name,last_name:action.last_name,email:action.email }:user


      )))



     

      
    case 'Supr': state.splice(action.index, 1)
      return(state);



    default:
      return state;
  }
}


export default UserReducer;