import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McstmGridComponent } from './mcstm-grid.component';

describe('McstmGridComponent', () => {
  let component: McstmGridComponent;
  let fixture: ComponentFixture<McstmGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McstmGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McstmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
