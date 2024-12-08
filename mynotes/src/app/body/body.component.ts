import * as bootstrap from 'bootstrap';
import { Component, NgModule } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { Note } from '../../models/note'; 
import { NgFor } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";
import { AddCardComponent } from "../add-card/add-card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardsComponent, NgFor, ModalComponent, AddCardComponent, FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  notes: Note[] = [
  ];

  noNotesMessage: string = 'Não há nada por aqui ainda. Adicione uma nova nota!';
  noNotesImage: string = 'https://cdn-icons-png.flaticon.com/512/1201/1201088.png';
  noNotesAltText: string = 'Nenhuma nota encontrada';
  noNotesImageSize: number = 25;

  selectedNote: Note | null = null;

  showNoteInModal(note: Note) {
    this.selectedNote = note;
    const modalElement = document.getElementById('exampleModal')!;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  addNoteToList(newNote: Note) {
    this.notes.push(newNote); // Adiciona a nova nota à lista
  }
}
