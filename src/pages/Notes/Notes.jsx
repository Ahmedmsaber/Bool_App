import React, { useEffect, useState } from 'react';
import NoteList from '../../components/NoteList';
const Notes = () => {

    const [notes, setNotes] = useState([]);
    //start of useeffect
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('bool-app-notes-data'));
        if(savedNotes){
            setNotes(savedNotes);
        }
        
    }, []);
    

    useEffect(()=>{
        localStorage.setItem('bool-app-notes-data',JSON.stringify(notes));
    },[notes])
    //end of use effect
    
    

    const handleSave = (note)=>{
        const newNotes = [note,...notes]
        setNotes(newNotes)
        
    }
    const handleDelete = (id)=>{
        const newNotes = notes.filter( note => note.id !== id)
        setNotes(newNotes)
    }
    return (
        <div className='notes'>
            <h1>Notes</h1>
            <NoteList notes={notes} addNote={handleSave} deleteNote={handleDelete} />
            
        </div>
    );
}

export default Notes;
