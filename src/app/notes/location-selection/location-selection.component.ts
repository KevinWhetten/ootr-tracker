import {Component, OnInit} from '@angular/core';
import {HintService} from "../../../services/hint.service";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss'],
  standalone: true,
  imports: [
    FormsModule
  ],
})
export class LocationSelectionComponent implements OnInit {
  color = 'gray';
  locations;

  constructor(private _hintService: HintService) {
    this.locations = this._hintService.locations;
  }

  ngOnInit(): void {
  }

}
