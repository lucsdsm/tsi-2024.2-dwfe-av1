import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() index!: number;
  @Input() note!: Note | null;
}
