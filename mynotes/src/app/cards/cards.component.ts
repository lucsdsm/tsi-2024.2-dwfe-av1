import { Component, Input } from '@angular/core';
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
}
