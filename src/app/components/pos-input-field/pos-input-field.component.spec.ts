import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosInputFieldComponent } from './pos-input-field.component';

describe('PosInputFieldComponent', () => {
  let component: PosInputFieldComponent;
  let fixture: ComponentFixture<PosInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
