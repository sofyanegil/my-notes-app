import React from 'react';
import ArchiveButton from './Buttons/ArchiveButton';
import DeleteButton from './Buttons/DeleteButton';
import { showFormattedDate } from '../utils';

export default function NotesItem({ note, onDeleteNote, onArchiveNote }) {
  const { id, title, body, createdAt, archived } = note;

  return (
    <article className="notes-item card">
      <div className="notes-item__body">
        <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
        <h3 className="notes-item__title">{title}</h3>
        <p className="notes-item__text">{body}</p>
      </div>
      <div className="notes-item__button">
        <ArchiveButton id={id} onArchiveNote={onArchiveNote} archived={archived} />
        <DeleteButton id={id} onDeleteNote={onDeleteNote} />
      </div>
    </article>
  );
}
