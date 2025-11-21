import React from 'react';
import { useNotes } from '../context/NotesContext';

const NoteList = () => {
  const { notes, selectedCategory, selectedNote, setSelectedNote, searchQuery, updateNote } = useNotes();

  const filteredNotes = notes.filter(note =>
    (!selectedCategory || note.category === selectedCategory) &&
    (note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
     note.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddNote = () => {
    setSelectedNote(null); // To show create form in editor
  };

  return (
    <div className="note-list">
      <h2>Notes</h2>
      <button onClick={handleAddNote}>Add New Note</button>
      {filteredNotes.map(note => (
        <div
          key={note.id}
          onClick={() => setSelectedNote(note)}
          className={`note-item ${selectedNote?.id === note.id ? 'active' : ''}`}
        >
          <h3>{note.title}</h3>
          <p>{note.content.substring(0, 100)}...</p>
          <div className="tags">{note.tags.join(', ')}</div>
          <button onClick={(e) => { e.stopPropagation(); updateNote(note.id, { favorite: !note.favorite }); }}>
            {note.favorite ? '⭐' : '☆'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
