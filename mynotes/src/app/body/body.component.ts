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
    new Note('Praesent libero', 'Integer id ullamcorper massa, sed hendrerit sem.', 'Texto completo da Nota 1'),
    new Note('Vivamus vitae', 'Pellentesque accumsan sollicitudin purus, a consectetur.', 'Texto completo da Nota 2'),
    new Note('Aliquam tristique', 'Morbi vestibulum, lacus sed cursus commodo,', 'Texto completo da Nota 3'),
  ];
}
