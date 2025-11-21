import React from 'react';
import { useNotes } from '../context/NotesContext';
import CategoryManager from './CategoryManager';

const Sidebar = () => {
  const { categories, selectedCategory, setSelectedCategory, notes } = useNotes();

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <CategoryManager />
      {categories.map(cat => (
        <div
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`category ${selectedCategory === cat ? 'active' : ''}`}
        >
          {cat} ({notes.filter(n => n.category === cat).length})
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
