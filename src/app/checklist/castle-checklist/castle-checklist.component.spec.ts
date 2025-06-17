import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleChecklistComponent } from './castle-checklist.component';

describe('CastleChecklistComponent', () => {
  let component: CastleChecklistComponent;
  let fixture: ComponentFixture<CastleChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastleChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
