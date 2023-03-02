import React, { useState } from 'react';

const Tour = (props) => {
  // To implemnt toggle for displaying all info of the tour
  // or a breif of the tour
  const [readMore, setReadMore] = useState(false);


  return (
    <article className='single-tour'>
      <img src={props.image} alt={props.name} />
      <footer>
        <div className='tour-info'>
          <h4>{props.name}</h4>
          <h4 className='tour-price'>${props.price}</h4>
        </div>
        <p>
          {readMore ? props.info : props.info.substring(0, 200)}...
          <button onClick={() => !setReadMore(!readMore)}>{readMore ? "show less" : "show more"}</button>
        </p>
        <button onClick={() => props.removeTour(props.id)} className='delete-btn'>not Intersted</button>
      </footer>
    </article>
  )
};

export default Tour;