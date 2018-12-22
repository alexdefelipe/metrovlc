import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosTablaComponent } from './horarios-tabla.component';

describe('HorariosTablaComponent', () => {
  let component: HorariosTablaComponent;
  let fixture: ComponentFixture<HorariosTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariosTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
