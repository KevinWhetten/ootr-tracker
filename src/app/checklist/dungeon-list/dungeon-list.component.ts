import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Check} from "../../../models/check";
import {CheckType} from "../../../models/check-type";
import {Era} from "../../../models/era";
import {FilterService} from "../../../services/filter.service";
import {Subscription} from "rxjs";
import {CheckCounterComponent} from './check-counter/check-counter.component';
import {CheckComponent} from '../list/check/check.component';

@Component({
  selector: 'app-dungeon-list',
  templateUrl: './dungeon-list.component.html',
  imports: [
    CheckCounterComponent,
    CheckComponent
  ],
  styleUrls: ['./dungeon-list.component.scss']
})
export class DungeonListComponent implements OnInit, OnDestroy {
  @Input() name: string = '';
  @Input() list: Check[] = [];
  @Input() color = 'gray';
  @Input() dungeonChecks = 0;
  @Input() keyChecks = 0;
  @Input() skullChecks = 0;
  @Input() era: Era = Era.NoRequirement;
  chest = CheckType.Chest;
  skulltula = CheckType.Skulltula;
  key = CheckType.Key;

  private childSubscription!: Subscription;
  private adultSubscription!: Subscription;
  private childFilter!: boolean;
  private adultFilter!: boolean;

  constructor(private _filterService: FilterService) { }

  ngOnInit(): void {
    this.childSubscription = this._filterService.childChecked.subscribe(x => this.childFilter = x);
    this.adultSubscription = this._filterService.adultChecked.subscribe(x => this.adultFilter = x);
  }

  ngOnDestroy() {
    this.childSubscription.unsubscribe();
    this.adultSubscription.unsubscribe();
  }

  outOfEraFilter() {
      if (this.childFilter && !this.adultFilter && this.era === Era.Adult) {
        return true;
      } else if (!this.childFilter && this.adultFilter && this.era === Era.Child){
        return true;
      }
      return false;
  }
}
