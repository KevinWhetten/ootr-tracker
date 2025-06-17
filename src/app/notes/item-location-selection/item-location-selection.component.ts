import {Component, OnInit} from '@angular/core';
import {HintService} from "../../../services/hint.service";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-item-location-selection',
  templateUrl: './item-location-selection.component.html',
  styleUrls: ['./item-location-selection.component.scss'],
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class ItemLocationSelectionComponent implements OnInit {
  color = 'gray';
  protected locations;

  constructor(private _hintService: HintService) {
    this.locations = this._hintService.itemLocations;
  }

  ngOnInit(): void {
  }

}
