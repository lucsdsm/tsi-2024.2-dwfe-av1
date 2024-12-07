import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() note!: Note;
  @Input() index!: number;

  @Output() openModalEvent = new EventEmitter<Note>(); // Evento para emitir a nota

  openModal() {
    this.openModalEvent.emit(this.note); // Emitindo a nota diretamente
  }
}


