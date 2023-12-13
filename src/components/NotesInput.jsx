import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Swal from 'sweetalert2';

export default class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      titleMax: 50,
    };
    autoBind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      title: title.length >= 50 ? prevState.title : title,
      titleMax: title.length >= 50 ? 0 : 50 - title.length,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
    this.props.closeForm();
    this.setState({
      title: '',
      body: '',
      titleMax: 50,
    });
    Swal.fire({
      icon: 'success',
      title: 'Catatan Berhasil ditambahkan',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  onCloseEventHandler() {
    this.props.closeForm();
  }

  render() {
    return (
      <section className="notes-form hide" id="notes-modal">
        <section className="notes-input card">
          <button type="submit" className="btn close" onClick={() => this.onCloseEventHandler()}>
            &times;
          </button>
          <h2>Buat Catatan Baru</h2>
          <form onSubmit={this.onSubmitEventHandler}>
            <div className="input flex">
              <label htmlFor="inputBookTitle">
                <div className="flex-title">
                  <p>Judul</p>
                  <p className="title-max">
                    Sisa Karakter:
                    {this.state.titleMax}
                  </p>
                </div>
                <br />
                <input id="inputBookTitle" type="text" required placeholder="Ketik Judul Catatan.." autoComplete="off" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
              </label>
            </div>
            <div className="input">
              <label htmlFor="inputBookTitle">
                Catatan :
                <br />
                <textarea id="inputBookTitle" type="text" required placeholder="Ketik Isi Catatan.." autoComplete="off" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
              </label>
            </div>
            <button className="btn btn-primary" id="bookSubmit" type="submit">
              Buat
            </button>
          </form>
        </section>
      </section>
    );
  }
}
