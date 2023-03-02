import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        {people.map((p) => {
          return (
            <article key={p.id}>
              <img src={p.image} alt={p.name} className='person-img' />
              <h4>{p.name}</h4>
              <p className='title'>{p.title}</p>
              <p className='text'>{p.quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev'><FiChevronLeft /></button>
        <button className='next'><FiChevronRight /></button>
      </div>
    </section>
  )
}

export default App;