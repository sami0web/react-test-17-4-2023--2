import React from 'react';
import React, { useState, useEffect } from 'react';
import './Carousel2.css';
function Carousel2() {

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
      setIndex( Index<tbimg.length-4 ? Index+3 : 0 );
    };
  
    const handlePreviousImage = () => {
      setIndex( Index>2 ? Index-3 : tbimg.length-3 );
    };
    
 const aff= ()=>{ if(tbimg.length > 0) 
  return(<div className='carousel-slide'>

  <a href={tbimg[Index].url} target="_blank">
         <img className='img_caro' src={tbimg[Index].download_url}  alt={tbimg[Index].author}/>
                                                 </a> 

<a href={tbimg[Index+1].url} target="_blank">
  <img className='img_caro' src={tbimg[Index+1].download_url}  alt={tbimg[Index+1].author}/>
                                                    </a> 
  <a href={tbimg[Index+2].url} target="_blank">
  <img className='img_caro' src={tbimg[Index+2].download_url}  alt={tbimg[Index+2].author}/>
                                                        </a> 

  
  </div>
  )}

 
    return (
      
      <div className='carousel-container'>
        
       
        {aff()}
      <div  className='btn'>
      <button id='b-pre' onClick={handlePreviousImage}> {"<<"}   </button>
      <button id='b-suiv' onClick={handleNextImage}>{">>"}</button>
      </div>
      </div>)

 
}

export default Carousel2;