import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainChecklistComponent } from './mountain-checklist.component';

describe('MountainChecklistComponent', () => {
  let component: MountainChecklistComponent;
  let fixture: ComponentFixture<MountainChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
