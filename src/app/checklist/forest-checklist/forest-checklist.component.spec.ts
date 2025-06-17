import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestChecklistComponent } from './forest-checklist.component';

describe('ForestChecklistComponent', () => {
  let component: ForestChecklistComponent;
  let fixture: ComponentFixture<ForestChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
