import { Component, OnInit } from '@angular/core';
import {FilterService} from "../../../services/filter.service";

@Component({
  selector: 'app-checklist-filter',
  templateUrl: './checklist-filter.component.html',
  styleUrls: ['./checklist-filter.component.css']
})
export class ChecklistFilterComponent implements OnInit {

  constructor(private _filterService: FilterService) { }

  ngOnInit(): void {
  }

  toggleFilter(filterName: string) {
    this._filterService.toggleFilter(filterName);
  }
}
