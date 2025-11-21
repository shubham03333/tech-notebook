import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const CategoryManager = () => {
  const [newCat, setNewCat] = useState('');
  const { addCategory } = useNotes();

  const handleAdd = () => {
    if (newCat.trim()) {
      addCategory(newCat.trim());
      setNewCat('');
    }
  };

  return (
    <div className="category-manager">
      <input
        type="text"
        placeholder="New category"
        value={newCat}
        onChange={e => setNewCat(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default CategoryManager;
