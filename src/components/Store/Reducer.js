import { createStore } from 'redux';

import { Modif, Supr } from '/actions.js';




function UserReducer(state, action) {
  switch (action.type) {

    case 'Load':
      return (state=action.donnes);



    case 'Modif':
      return ({...state,first_name:action.first_name, last_name:action.last_name,email:action.email});

      
    case 'Supr':
      return( {...state,first_name:' ', last_name:' ',email:' '});
    default:
      return state;
  }
}


export default UserReducer;