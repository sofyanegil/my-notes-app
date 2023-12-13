import React, { Component } from 'react';
import autobind from 'auto-bind';
import Swal from 'sweetalert2';
import { getInitialData } from './utils';
import NotesHeader from './components/NotesHeader';
import NotesBody from './components/NotesBody';
import './styles/styles.css';
import NotesFooter from './components/NotesFooter';

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };
    autobind(this);
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  }

  deleteNoteHandler(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Yakin, Hapus?',
        text: 'Catatan yang dihapus tidak bisa dikembalikan',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus!',
        cancelButtonText: 'Batal',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('Terhapus!', 'Catatan Anda dihapus', 'success');
          return this.setState((prevState) => ({
            ...prevState,
            notes: prevState.notes.filter((note) => note.id !== id),
          }));
        }
        if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Batal Hapus', 'Catatan Anda masih ada', 'error');
        }
      });
  }

  archiveNoteHandler(id) {
    this.setState((prevState) => ({
      ...prevState,
      notes: prevState.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)),
    }));
    Swal.fire({
      icon: 'success',
      title: 'Catatan dipindahkan',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  searchNoteHandler(event) {
    const keyword = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      search: keyword,
    }));
  }

  showForm() {
    const form = document.getElementById('notes-modal');
    form.classList.remove('hide');
  }

  closeForm() {
    const form = document.getElementById('notes-modal');
    form.classList.add('hide');
  }

  render() {
    return (
      <>
        <NotesHeader />
        <NotesBody
          notes={this.state.notes}
          search={this.state.search}
          onAddNote={this.addNoteHandler}
          onDeleteNote={this.deleteNoteHandler}
          onArchiveNote={this.archiveNoteHandler}
          onSearchNote={this.searchNoteHandler}
          showForm={this.showForm}
          closeForm={this.closeForm}
        />
        <NotesFooter />
      </>
    );
  }
}
