import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedallionsComponent } from './medallions.component';

describe('MedallionsComponent', () => {
  let component: MedallionsComponent;
  let fixture: ComponentFixture<MedallionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedallionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedallionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
