import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Check} from "../../../../models/check";
import {CheckType} from "../../../../models/check-type";
import {Era} from "../../../../models/era";
import {Subscription} from "rxjs";
import {FilterService} from "../../../../services/filter.service";
import {CheckCounterComponent} from '../check-counter/check-counter.component';

@Component({
  selector: 'app-trials-list',
  templateUrl: './trials-list.component.html',
  imports: [
    CheckCounterComponent
  ],
  styleUrls: ['./trials-list.component.scss']
})
export class TrialsListComponent implements OnInit, OnDestroy {
  @Input() name: string = '';
  @Input() list: Check[] = [];
  @Input() color = 'gray';
  @Input() dungeonChecks = 0;
  @Input() skullChecks = 0;
  era: Era = Era.Adult;
  chest = CheckType.Chest;
  dungeonSource = '<img src=\x22icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

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
