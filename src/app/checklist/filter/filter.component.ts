import {Component, OnInit} from '@angular/core';
import {FilterService} from "../../../services/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private _filterService: FilterService) { }

  ngOnInit(): void {
  }

  toggleChildEra() {
    this._filterService.toggleChild();
  }

  toggleAdultEra() {
    this._filterService.toggleAdult();
  }

  toggleDayTime() {
    this._filterService.toggleDay();

  }

  toggleNightTime() {
    this._filterService.toggleNight();
  }
}
