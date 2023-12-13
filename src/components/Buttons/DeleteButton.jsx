import React from 'react';

export default function DeleteButton({ id, onDeleteNote }) {
  return (
    <button type="submit" className="btn btn-danger" onClick={() => onDeleteNote(id)}>
      Hapus
    </button>
  );
}
