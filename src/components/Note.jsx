import React from 'react';
import './note.css';
import {DeleteOutlined} from '@ant-design/icons'
const Note = ({id , text , date,deleteNote}) => {
    // const note  = props.note
    return (
        <div className='note' key={id}>
            <div className="body-note">
                <p>{text}</p>
            </div>
            <div className='note-footer'>
                <small>{date}</small>
                <DeleteOutlined className='delete-icon' onClick={() => deleteNote(id)}/>
            </div>
        </div>
    );
}

export default Note;
