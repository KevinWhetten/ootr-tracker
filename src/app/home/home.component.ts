import {Component} from '@angular/core';
import {TrackerComponent} from '../tracker/tracker.component';
import {NotesComponent} from '../notes/notes.component';
import {ChecklistComponent} from '../checklist/checklist.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    TrackerComponent,
    NotesComponent,
    ChecklistComponent
  ],
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  private resizing: boolean = false;

  width: number = 750;
  height: number = this.width * 1.1685167;

  constructor() {
  }

  startResize($event: MouseEvent) {
    $event.preventDefault();
    this.resizing = true;
  }

  resize($event: MouseEvent) {
    $event.preventDefault();

    if (this.resizing) {
      this.width += $event.movementX;
    }
  }

  endResize($event: MouseEvent) {
    this.resizing = false;
  }
}
