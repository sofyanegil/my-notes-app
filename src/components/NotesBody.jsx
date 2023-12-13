import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import NotesSearch from './NotesSearch';
import AddButton from './Buttons/AddButton';

export default function NotesBody({ notes, search, onAddNote, onDeleteNote, onArchiveNote, onSearchNote, showForm, closeForm }) {
  const notesFilter = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
  const notesArchived = notesFilter.filter((note) => note.archived);
  const notesUnarchived = notesFilter.filter((note) => !note.archived);

  return (
    <main>
      <NotesSearch onSearchNote={onSearchNote} />
      <NotesInput closeForm={closeForm} onAddNote={onAddNote} />
      <AddButton showForm={showForm} />
      <NotesList title="Catatan Aktif" notes={notesUnarchived} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} />
      <NotesList title="Arsip" notes={notesArchived} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} />
    </main>
  );
}
