import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertChecklistComponent } from './desert-checklist.component';

describe('DesertChecklistComponent', () => {
  let component: DesertChecklistComponent;
  let fixture: ComponentFixture<DesertChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
