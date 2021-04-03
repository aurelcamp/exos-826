import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correction2Component } from './correction2.component';

describe('Correction2Component', () => {
  let component: Correction2Component;
  let fixture: ComponentFixture<Correction2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Correction2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Correction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
