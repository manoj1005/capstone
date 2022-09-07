import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UGetallComponent } from './u-getall.component';

describe('UGetallComponent', () => {
  let component: UGetallComponent;
  let fixture: ComponentFixture<UGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UGetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
