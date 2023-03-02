import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    isShow: false,
    alertMsg: '',
    type: '' // remove or added
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form action!");
  }
  return (
    <section className='section-center'>
      <form className='note-form' onSubmit={handleSubmit}>
        {alert.isShow && <Alert />}
        <h3>Notes List</h3>
        <div className='form-control'>
          <input type="text" className='note'
            placeholder='e.g learn a language' value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      <div className='note-container'>
        <List />
      </div>
      <button className='clear-btn'>Clear items</button>
    </section>
  )
}

export default App