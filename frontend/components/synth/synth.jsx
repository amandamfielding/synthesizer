import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import {keyPressed,keyReleased} from '../../actions/notes_actions';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = {};
    NOTE_NAMES.forEach( (key) => {
      this.notes[key] = new Note(TONES[key]);
    });
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    let {notes} = this.props;
    let allNotes = Object.keys(this.notes);
    allNotes.forEach( (letter) => {
      if (notes.includes(letter)) {
        this.notes[letter].start();
      } else {
        this.notes[letter].stop();
      }
    });
  }

  render() {
    this.playNotes();
    let pressed;
    const notekey = NOTE_NAMES.map ( (noteName) => {
      pressed = this.props.notes.includes(noteName);
      return <li key={noteName}><NoteKey note={noteName} pressed={pressed}/></li>;
    });
    return (
      <div>
        <ul>
          {notekey}
        </ul>
      </div>
    );
  }
}

export default Synth;
