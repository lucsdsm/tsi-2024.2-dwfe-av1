import { Component, NgModule } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { Note } from '../../models/note'; 
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardsComponent, NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  notes: Note[] = [
    new Note('Nota 1', 'Resumo da Nota 1', 'Texto completo da Nota 1'),
    new Note('Nota 2', 'Resumo da Nota 2', 'Texto completo da Nota 2'),
    new Note('Nota 3', 'Resumo da Nota 3', 'Texto completo da Nota 3'),
  ];

  constructor() {
    console.log('Lista de notas:', this.notes); // Verifique se a lista está preenchida no console do navegador
  }
}
