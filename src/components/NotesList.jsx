import React from 'react';
import NotesItem from './NotesItem';

export default function NotesList({ title, notes, onDeleteNote, onArchiveNote }) {
  return (
    <div className="notes-list card">
      <h2>{title}</h2>
      <div className="notes-list__container">
        {notes.length === 0 ? <p className="no-notes">Tidak ada catatan</p> : notes.map((note) => <NotesItem key={note.id} id={note.id} note={note} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} />)}
      </div>
    </div>
  );
}
