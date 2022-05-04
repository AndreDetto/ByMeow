import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDutyComponent } from './e-duty.component';

describe('EDutyComponent', () => {
  let component: EDutyComponent;
  let fixture: ComponentFixture<EDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDutyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
