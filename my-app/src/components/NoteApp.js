import React, { useState , useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import Note from '../components/Note'

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        setTitle('');
        setBody('');
    }
    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes: notes})
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
    const removeNote = (title) => {
        dispatch({ type: 'REMOVE_NOTE', title})
    }
    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <Note key={note.title} note={note} removeNote={removeNote} />
            ))}
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input value={body} onChange={(e) => setBody(e.target.value)}/>
                <button>Add note</button>
            </form>
        </div>
    )
}

export { NoteApp as default };