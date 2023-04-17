import React from 'react';
import React, { useState, useEffect } from 'react';
import './Carousel.css';
function Carousel() {

  const [tbimg, settbimg] = useState([]);
  const [Index, setIndex] = useState(0);
  useEffect(() => {
 
    console.log('useEffect() called');
    if (tbimg.length === 0) {

      fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(data => settbimg(data)).catch(error => console.log(error)); }
    }, []);


    const handleNextImage = () => {
      setIndex( Index<tbimg.length-1 ? Index+1 : 0 );
    };
  
    const handlePreviousImage = () => {
      setIndex( Index>0 ? Index-1 : tbimg.length-1 );
    };
    
 const aff= ()=>{ if(tbimg.length > 0) 
  return( <img className='img_caro' src={tbimg[Index].download_url}  alt={tbimg[Index].author}/>) }

 
    return (
      
      <div className='carousel-container'>
        
        <button id='b-pre' onClick={handlePreviousImage}> {"<<"} </button>
       <div className='carousel-slide'>{aff()}</div>
       
      <button id='b-suiv' onClick={handleNextImage}>{">>"}</button>
   
      </div>)

 
}

export default Carousel;