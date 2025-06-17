import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Check} from "../../../../models/check";
import {Era} from "../../../../models/era";
import {TimeOfDay} from "../../../../models/timeOfDay";
import {FilterService} from "../../../../services/filter.service";
import {of, Subscription} from "rxjs";

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit, OnDestroy {
  @Input() check: Check = {} as Check;
  checked = false;

  private currentInventory: number[] = [] as number[];

  private daySubscription!: Subscription;
  private nightSubscription!: Subscription;
  private childSubscription!: Subscription;
  private adultSubscription!: Subscription;
  private availableSubscription!: Subscription;
  private unavailableSubscription!: Subscription;
  private completedSubscription!: Subscription;

  private dayFilter!: boolean;
  private nightFilter!: boolean;
  private childFilter!: boolean;
  private adultFilter!: boolean;
  private availableFilter!: boolean;
  private unavailableFilter!: boolean;
  private completedFilter!: boolean;

  constructor(private _filterService: FilterService) {
  }

  ngOnInit(): void {
    this.daySubscription = this._filterService.dayChecked.subscribe(x => this.dayFilter = x);
    this.nightSubscription = this._filterService.nightChecked.subscribe(x => this.nightFilter = x);
    this.childSubscription = this._filterService.childChecked.subscribe(x => this.childFilter = x);
    this.adultSubscription = this._filterService.adultChecked.subscribe(x => this.adultFilter = x);
    this.availableSubscription = this._filterService.availableChecked.subscribe(x => this.availableFilter = x);
    this.unavailableSubscription = this._filterService.unavailableChecked.subscribe(x => this.unavailableFilter = x);
    this.completedSubscription = this._filterService.completedChecked.subscribe(x => this.completedFilter = x);
  }

  ngOnDestroy(): void {
    this.daySubscription.unsubscribe();
    this.nightSubscription.unsubscribe();
    this.childSubscription.unsubscribe();
    this.adultSubscription.unsubscribe();
    this.availableSubscription.unsubscribe();
    this.unavailableSubscription.unsubscribe();
    this.completedSubscription.unsubscribe();
  }

  toggleCheck() {
    this.checked = !this.checked;
  }

  inFilter() {
    return this.inTimeFilter()
      && this.inEraFilter()
      // && this.inLogicFilter()
      && this.inCompletedFilter();
  }

  inTimeFilter() {
    if (this.check.time === TimeOfDay.NoRequirement || (this.dayFilter && this.nightFilter) || (!this.dayFilter && !this.nightFilter)) {
      return true;
    } else if (this.dayFilter && !this.nightFilter && this.check.time === TimeOfDay.Day) {
      return true;
    } else if (!this.dayFilter && this.nightFilter && this.check.time === TimeOfDay.Night){
      return true;
    }
    return false;
  }

  inEraFilter() {
    if (this.check.era === Era.NoRequirement || (this.childFilter && this.adultFilter) || (!this.childFilter && !this.adultFilter)) {
      return true;
    } else if (this.childFilter && !this.adultFilter && this.check.era === Era.Child) {
      return true;
    } else if (!this.childFilter && this.adultFilter && this.check.era === Era.Adult){
      return true;
    }
    return false;
  }

  inLogicFilter() {
    for (let itemList of this.check.requirements) {
      let hasRequiredItem: boolean = false;

      for (let itemNumber of itemList) {
        if (this.currentInventory.filter(x => x === itemNumber).length > 0) {
          hasRequiredItem = true;
          break;
        }
      }
      if (!hasRequiredItem) {
        return false;
      }
    }
    return true;
  }

  inCompletedFilter() {
    if (!this.check.checked) {
      return true;
    } else if (this.check.checked && this.completedFilter) {
      return true;
    }
    return false;
  }
}
