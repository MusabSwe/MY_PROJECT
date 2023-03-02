import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = (props) => {
    return (
        <div className='note-list'>
            {props.notes && props.notes?.map((item) => {
                const { id, note } = item;
                return <article key={id} className='note-item'>
                    <p className='title'>{note}</p>
                    <div className='btn-container'>
                        <button type='button' className='edit-btn' onClick={() => props.editNote(id)}><FaEdit /></button>
                        <button type='button' className='delete-btn' onClick={() => props.removeNote(id)}><FaTrash /></button>
                    </div>
                </article>
            })}
        </div>
    )
}

export default List