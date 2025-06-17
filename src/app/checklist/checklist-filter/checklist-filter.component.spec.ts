import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistFilterComponent } from './checklist-filter.component';

describe('ChecklistFilterComponent', () => {
  let component: ChecklistFilterComponent;
  let fixture: ComponentFixture<ChecklistFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
