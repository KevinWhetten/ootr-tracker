import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Check} from "../../../models/check";
import {Subscription} from "rxjs";
import {FilterService} from "../../../services/filter.service";
import {Era} from "../../../models/era";
import {CheckComponent} from './check/check.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  imports: [
    CheckComponent
  ],
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() name: string = '';
  @Input() list: Check[] = [];
  @Input() color = 'gray';
  @Input() era: Era = Era.NoRequirement;

  private childSubscription!: Subscription;
  private adultSubscription!: Subscription;
  private childFilter!: boolean;
  private adultFilter!: boolean;

  constructor(private _filterService: FilterService) {
  }

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
