import React from 'react';

export default function AddButton({ showForm }) {
  return (
    <button type="submit" className="btn btn-add" onClick={() => showForm()}>
      +
    </button>
  );
}
