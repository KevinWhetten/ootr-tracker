import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherChecklistComponent } from './other-checklist.component';

describe('RanchChecklistComponent', () => {
  let component: OtherChecklistComponent;
  let fixture: ComponentFixture<OtherChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
