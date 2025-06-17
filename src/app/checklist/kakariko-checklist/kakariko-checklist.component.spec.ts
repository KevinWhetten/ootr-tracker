import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakarikoChecklistComponent } from './kakariko-checklist.component';

describe('KakarikoComponent', () => {
  let component: KakarikoChecklistComponent;
  let fixture: ComponentFixture<KakarikoChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KakarikoChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KakarikoChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
