import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {props.tours && props.tours?.map((tour) => {
          return <Tour key={tour.id}{...tour} removeTour={props.removeTour}></Tour>
        })}
      </div>
    </section>
  )
};

export default Tours;