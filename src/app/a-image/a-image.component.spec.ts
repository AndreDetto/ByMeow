import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AImageComponent } from './a-image.component';

describe('AImageComponent', () => {
  let component: AImageComponent;
  let fixture: ComponentFixture<AImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
