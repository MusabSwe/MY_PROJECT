import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='underline'></div>
      </div>

      {props.tours.length !== 0 ? <div>
        {props.tours && props.tours?.map((tour) => {
          return <Tour key={tour.id}{...tour} removeTour={props.removeTour}></Tour>
        })}
      </div> : (
        <div className='title'>
          <h2 >No Tours left</h2>
          <button className='title btn' onClick={props.refresh}>Refresh</button>
        </div>
      )
      }
    </section>
  )
};

export default Tours;