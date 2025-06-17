import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverChecklistComponent } from './river-checklist.component';

describe('RiverChecklistComponent', () => {
  let component: RiverChecklistComponent;
  let fixture: ComponentFixture<RiverChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
