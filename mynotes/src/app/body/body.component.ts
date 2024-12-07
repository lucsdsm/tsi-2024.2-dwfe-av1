import { Component, NgModule } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { Note } from '../../models/note'; 
import { NgFor } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardsComponent, NgFor, ModalComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  notes: Note[] = [
    new Note('Praesent libero', 'Integer id ullamcorper massa, sed hendrerit sem.', 'Donec in iaculis justo. Sed ac lacus rhoncus, vestibulum felis in, dignissim tortor. Etiam lorem enim, iaculis nec finibus sed, egestas at erat. Praesent nec hendrerit metus. Nullam fringilla commodo semper. In est nibh, scelerisque ut condimentum nec, fermentum ut massa. Vestibulum ultricies tempor lobortis. Fusce a euismod turpis, vitae dictum lacus. Morbi non nunc ac lorem tincidunt vehicula. Morbi at dolor vitae mi sodales posuere et quis felis. Vestibulum eu neque et felis laoreet interdum.'),
    new Note('Vivamus vitae', 'Pellentesque accumsan sollicitudin purus, a consectetur.', 'Nam et rhoncus diam. Fusce orci nulla, interdum pellentesque eleifend sed, semper vitae velit. Sed in posuere libero, id vestibulum lectus. Fusce scelerisque sapien quis justo pretium, ac pulvinar erat dictum. Vivamus consequat, mauris ac feugiat sollicitudin, diam nisi varius leo, sit amet lobortis ligula est at neque. Aenean feugiat lorem ut magna eleifend dapibus. Nulla ut blandit ligula, et vulputate ante. Fusce orci risus, cursus vitae dignissim ac, efficitur quis tellus. Fusce et sollicitudin eros. Aenean ullamcorper fringilla felis. Donec id arcu ultricies, volutpat ipsum ut, luctus risus. Donec non lacus viverra, condimentum risus sed, luctus ex. Cras vehicula facilisis commodo.'),
    new Note('Aliquam tristique', 'Morbi vestibulum, lacus sed cursus commodo,', 'Sed at faucibus nunc, facilisis facilisis ligula. Pellentesque consectetur, dui ut sagittis venenatis, justo ipsum ultrices mi, eget dignissim ligula odio at orci. Aliquam at purus purus. Phasellus efficitur aliquet magna eu semper. Cras viverra, nisi vitae molestie malesuada, erat sem fringilla risus, a porta dolor dui at dui. Proin sit amet augue non erat pellentesque pharetra non eget nunc. Nunc posuere risus finibus felis feugiat, id sollicitudin urna aliquam. Duis eu ante turpis. Duis id risus pellentesque, tincidunt nisl non, consequat velit. Nullam mattis pulvinar velit. Curabitur venenatis, nisi vel fringilla posuere, sapien lorem tempor libero, vel semper neque orci ut magna. Phasellus ac tincidunt sem, in rutrum ipsum.'),
  ];

  selectedNote: Note | null = null;

  showNoteInModal(note: Note) {
    this.selectedNote = note;
    const modalElement = document.getElementById('exampleModal')!;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  } 
}
