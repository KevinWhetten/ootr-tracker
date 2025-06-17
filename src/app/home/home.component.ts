import {Component} from '@angular/core';
import {TrackerComponent} from '../tracker/tracker.component';
import {NotesComponent} from '../notes/notes.component';
import {ChecklistComponent} from '../checklist/checklist.component';
import {EquipmentComponent} from '../tracker/equipment/equipment.component';
import {ItemsComponent} from '../tracker/items/items.component';
import {MedallionsComponent} from '../tracker/medallions/medallions.component';
import {OtherComponent} from '../tracker/other/other.component';
import {SongsComponent} from '../tracker/songs/songs.component';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    TrackerComponent,
    NotesComponent,
    ChecklistComponent,
    EquipmentComponent,
    ItemsComponent,
    MedallionsComponent,
    OtherComponent,
    SongsComponent
  ],
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  private resizing: boolean = false;

  width: number = 750;
  height: number = this.width * 1.1685167;

  constructor(private sanitization: DomSanitizer) {
  }

  startResize($event: MouseEvent) {
    this.resizing = true;
  }

  resize($event: MouseEvent) {

    if (this.resizing) {
      this.width += $event.movementX;
    }
  }

  endResize($event: MouseEvent) {
    this.resizing = false;
  }
}
