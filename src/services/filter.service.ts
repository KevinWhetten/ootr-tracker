import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private day = new BehaviorSubject(false);
  private night = new BehaviorSubject(false);
  private child = new BehaviorSubject(false);
  private adult = new BehaviorSubject(false);
  private available = new BehaviorSubject(false);
  private unavailable = new BehaviorSubject(false);
  private completed = new BehaviorSubject(false);

  public dayChecked: Observable<boolean> = this.day.asObservable();
  public nightChecked: Observable<boolean> = this.night.asObservable();
  public childChecked: Observable<boolean> = this.child.asObservable();
  public adultChecked: Observable<boolean> = this.adult.asObservable();
  public availableChecked: Observable<boolean> = this.available.asObservable();
  public unavailableChecked: Observable<boolean> = this.unavailable.asObservable();
  public completedChecked: Observable<boolean> = this.completed.asObservable();

  constructor() { }

  toggleFilter(filterName: string) {
    switch(filterName){
      case 'day':
        this.day.next(!this.day.value);
        break;
      case 'night':
        this.night.next(!this.night.value);
        break;
      case 'child':
        this.child.next(!this.child.value);
        break;
      case 'adult':
        this.adult.next(!this.adult.value);
        break;
      case 'available':
        this.available.next(!this.available.value);
        break;
      case 'unavailable':
        this.unavailable.next(!this.unavailable.value);
        break;
      case 'completed':
        this.completed.next(!this.completed.value);
        break;
      default:
        break;
    }
  }

  toggleChild() {
    this.toggleFilter('child')
  }

  toggleAdult() {
    this.toggleFilter('adult')
  }

  toggleDay() {
    this.toggleFilter('day')
  }

  toggleNight() {
    this.toggleFilter('night')
  }
}
