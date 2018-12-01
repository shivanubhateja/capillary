import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosFormComponentComponent } from './pos-form-component.component';

describe('PosFormComponentComponent', () => {
  let component: PosFormComponentComponent;
  let fixture: ComponentFixture<PosFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
