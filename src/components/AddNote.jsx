import React, { useState } from 'react';
import './note.css'
import {SaveOutlined} from '@ant-design/icons'
const AddNote = ({addNote}) => {
    const [note, setNote] = useState("");
    const charLimit = 255
    const handleChange = (e) =>{
        
        if(charLimit - e.target.value.length >= 0){
            setNote(e.target.value)
        }

    }
    const handleAddNote = ()=>{
        const id = Math.random()
        const date = new Date()
        const newNote = {
            id: id,
            text:note,
            date: date.toLocaleDateString()
        }
        if(note.trim().length > 0){
            addNote(newNote)
        }
        setNote("")
    }
    return (
        <div className='note new'>
            <textarea
            cols='10'
            rows='8'
            value={note}
            placeholder='type to add a note ....'
            onChange={(e) => handleChange(e)}
            />
            <div className="note-footer">
                <small>{charLimit - note.length} Remaining</small>
                <SaveOutlined className='save' onClick={handleAddNote}/>
            </div>
        </div>
    );
}

export default AddNote;
