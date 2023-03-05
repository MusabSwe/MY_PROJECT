import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // to solve when reach last reveiw 
  // we want to return back to the 1st review 
  // we use useEffect because to update the dom
  //  when the index change & people change
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {// negative means the index go to last review
      setIndex(lastIndex);
    }
    if (index > lastIndex) { // if the index > the length of reviews means go to the first review
      setIndex(0);
    }
  }, [index, people]);


  // setInterval when the review slide change
  // and we use useEffect to set the period everytime the index (review) change 
  useEffect(() => {
    let slider = setInterval(() => {
      // Every 3s review slide change
      setIndex(index + 1)
    }, 3000);
    // called clean up useEffect
    // To clear the interval when we click on the button
    // either for the nex or prev slider 
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          // nextSlide name should be matching css 
          // to maniuplate with slide of reviwes  
          let position = "nextSlide";
          // to control which slide will display
          // 
          if (personIndex === index) {
            position = 'activeSlide';
          }
          // when the index reach last review then return back to the first review
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return (
            // Review Content
            <article key={person.id} className={position} >
              <img src={person.image} alt={person.name} className='person-img' />
              <h4>{person.name}</h4>
              <p className='title'>{person.title}</p>
              <p className='text'>{person.quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
        <button className='next' onClick={() => setIndex(index + 1)}><FiChevronRight /></button>
      </div>
    </section>
  )
}

export default App;