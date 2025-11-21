import React, { useEffect } from 'react';
import { useNotes } from '../context/NotesContext';

const SearchBar = ({ onMenuClick }) => {
  const { searchQuery, setSearchQuery } = useNotes();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.search-input').focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="search-bar">
      <button className="menu-button" onClick={onMenuClick}>
        ☰
      </button>
      <input
        className="search-input"
        type="text"
        placeholder="Search notes... (Ctrl+K)"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
