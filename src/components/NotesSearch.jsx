import React from 'react';

export default function NotesSearch({ onSearchNote }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari Catatan" onChange={onSearchNote} />
    </div>
  );
}
