import { Component } from '@angular/core';
import { NotesComponent } from "../notes/notes.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NotesComponent, NotesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
