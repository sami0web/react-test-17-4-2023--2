import React from 'react';
import { BrowserRouter ,Route ,Routes, Switch,NavLink,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Body1 from './components/Body1';
import Carousel from './components/Carousel2';
import { Provider } from 'react-redux';
import UserReducer from './components/Store/Reducer';
import { createStore } from 'redux';

 function App() {

  const store = createStore(UserReducer);
  return (


    <Provider store={store}>
    <div className="App">

        <Navbar />
       <Body1/>
       
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>


      

      
    </div>
    </Provider>
   
  );
}


export default App;