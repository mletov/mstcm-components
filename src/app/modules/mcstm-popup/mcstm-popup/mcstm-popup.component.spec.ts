import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McstmPopupComponent } from './mcstm-popup.component';

describe('McstmPopupComponent', () => {
  let component: McstmPopupComponent;
  let fixture: ComponentFixture<McstmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McstmPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McstmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
