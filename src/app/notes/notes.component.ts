import {Component, OnInit} from '@angular/core';
import {ItemSelectionComponent} from './item-selection/item-selection.component';
import {ItemLocationSelectionComponent} from './item-location-selection/item-location-selection.component';
import {LocationSelectionComponent} from './location-selection/location-selection.component';
import {BossSelectionComponent} from './boss-selection/boss-selection.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  standalone: true,
  imports: [
    ItemSelectionComponent,
    ItemLocationSelectionComponent,
    LocationSelectionComponent,
    BossSelectionComponent
  ]
})
export class NotesComponent implements OnInit {
  private pathHints = 0;
  private barrenHints = 0;
  private otherHints = 0;
  private sometimesHints = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPathHintIteration() {
    return Array(this.pathHints).fill(0).map((x, i) => i);
  }

  getBarrenHintIteration() {
    return Array(this.barrenHints).fill(0).map((x, i) => i);
  }

  getOtherHintIteration() {
    return Array(this.otherHints).fill(0).map((x, i) => i);
  }

  addPathHint() {
    this.pathHints++;
  }

  addBarrenHint() {
    this.barrenHints++;
  }

  addOtherHint() {
    this.otherHints++;
  }

  resetPathHints() {
    this.pathHints = 0;
  }

  resetBarrenHints() {
    this.barrenHints = 0;
  }

  resetOtherHints() {
    this.otherHints = 0;
  }
}
