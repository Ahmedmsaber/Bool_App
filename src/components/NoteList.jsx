import React from 'react';
import AddNote from './AddNote';
import Note from './Note';
import './note.css'
const NoteList = ({notes, addNote,deleteNote}) => {
    
    return (
        <div className='notelist'>
            <AddNote addNote={addNote}/>
            {
               notes.map( note => <Note id={note.id} text={note.text} date={note.date} deleteNote={deleteNote}/>)
            }
        </div>
    );
}

export default NoteList;
