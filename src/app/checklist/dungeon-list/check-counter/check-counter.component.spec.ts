import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCounterComponent } from './check-counter.component';

describe('CheckCounterComponent', () => {
  let component: CheckCounterComponent;
  let fixture: ComponentFixture<CheckCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
