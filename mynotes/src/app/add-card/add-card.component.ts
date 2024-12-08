import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../../models/note';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {
  title: string = '';
  summary: string = '';
  content: string = '';

  @Output() addNote = new EventEmitter<Note>();

  onAddNote() {
    if (this.title.trim() && this.summary.trim() && this.content.trim()) {
      const newNote: Note = {
        title: this.title,
        summary: this.summary,
        content: this.content
      };
      this.addNote.emit(newNote);
      this.resetForm(); // Limpa os campos do formulário
    }
  }

  resetForm() {
    this.title = '';
    this.summary = '';
    this.content = '';
  }
}
