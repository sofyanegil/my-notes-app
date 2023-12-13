import React from 'react';

export default function ArchiveButton({ id, archived, onArchiveNote }) {
  return (
    <button type="submit" className="btn btn-primary" onClick={() => onArchiveNote(id)}>
      {archived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}
