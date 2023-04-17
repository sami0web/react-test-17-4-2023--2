import React from 'react';
import { createStore } from 'redux';
import UserReducer from './Reducer';

const store = createStore(UserReducer);