import {Component, OnInit} from '@angular/core';
import {ForestChecklistComponent} from './forest-checklist/forest-checklist.component';
import {MountainChecklistComponent} from './mountain-checklist/mountain-checklist.component';
import {RiverChecklistComponent} from './river-checklist/river-checklist.component';
import {CastleChecklistComponent} from './castle-checklist/castle-checklist.component';
import {KakarikoChecklistComponent} from './kakariko-checklist/kakariko-checklist.component';
import {DesertChecklistComponent} from './desert-checklist/desert-checklist.component';
import {OtherChecklistComponent} from './other-checklist/other-checklist.component';
import {ChecklistFilterComponent} from './checklist-filter/checklist-filter.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  imports: [
    ForestChecklistComponent,
    MountainChecklistComponent,
    RiverChecklistComponent,
    CastleChecklistComponent,
    KakarikoChecklistComponent,
    DesertChecklistComponent,
    OtherChecklistComponent,
    ChecklistFilterComponent
  ],
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
