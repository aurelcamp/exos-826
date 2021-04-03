import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correction1Component } from './correction1.component';

describe('Correction1Component', () => {
  let component: Correction1Component;
  let fixture: ComponentFixture<Correction1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Correction1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Correction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
