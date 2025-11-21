import React from 'react';
import { useNotes } from '../context/NotesContext';
import CategoryManager from './CategoryManager';

const Sidebar = ({ isOpen, onClose }) => {
  const { categories, selectedCategory, setSelectedCategory, notes } = useNotes();

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={onClose}>×</button>
        <h2>Categories</h2>
        <CategoryManager />
        {categories.map(cat => (
          <div
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`category ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat} ({notes.filter(n => n.category === cat).length})
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
