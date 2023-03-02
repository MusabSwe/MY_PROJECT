import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // to switch between add a note and edit a note
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    isShow: false,
    type: '', // alert of remove or added
    alertMsg: ''
  });
  // to display alert messages
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      // Display alert
      showAlert(true, 'danger', 'Please enter a note');

    } else if (name && isEditing) {
      // edit


    } else {
      // add a note
      showAlert(true, 'success', 'Note added to the list');
      const newNote = { id: new Date().getTime().toString(), note: name };
      setList([...list, newNote]);
      setName('');
    }

  }

  const showAlert = (isShow = false, type = '', alertMsg = "") => {
    setAlert({ isShow, type, alertMsg })
  }

  return (
    <section className='section-center'>
      <form className='note-form' onSubmit={handleSubmit}>
        {alert.isShow && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Notes List</h3>
        <div className='form-control'>
          <input type="text" className='note'
            placeholder='e.g learn a language' value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>{isEditing ? 'edit a note' : 'add a note'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='note-container'>
          <List notes={list} />
          <button className='clear-btn'>Clear items</button>
        </div>
      )}

    </section>
  )
}

export default App