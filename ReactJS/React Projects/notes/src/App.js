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
      console.log(editId);
      setList(list.map((n) => {
        if (n.id === editId) {

          return { ...n, note: name }
        }
        return n;
      }))
      setName('');
      setIsEditing(false);
      setEditId(null);
      showAlert(true, 'success', 'Note updated');


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

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  }

  const removeNote = (id) => {
    showAlert(true, 'danger', 'Note removed');
    setList(list.filter((n) => n.id !== id))
  }

  const editNote = (id) => {
    const specificNote = list.find((n) => n.id === id);
    setIsEditing(true); // toggle button to edit a note 
    setEditId(id);// to specify which id we will change and update the lis and we can reuse in submit listener
    setName(specificNote.note);// to display note in the input field
  }

  return (
    <section className='section-center'>
      <form className='note-form' onSubmit={handleSubmit}>
        {alert.isShow && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
          <List notes={list} removeNote={removeNote} editNote={editNote} />
          <button onClick={clearList} className='clear-btn'>Clear items</button>
        </div>
      )}

    </section>
  )
}

export default App