import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import SearchBar from './components/SearchBar';
import Login from './components/Login';
import Signup from './components/Signup';
import { NotesProvider } from './context/NotesContext';
import { useAuth } from './context/AuthContext';
import './App.css';

function App() {
  const { currentUser, loading } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return (
      <div className="auth-container">
        <Login />
        <Signup />
      </div>
    );
  }

  return (
    <NotesProvider>
      <div className="app">
        <SearchBar />
        <Sidebar />
        <NoteList />
        <NoteEditor />
        <button
          style={{ position: 'fixed', bottom: 10, right: 10 }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </NotesProvider>
  );
}

export default App;
