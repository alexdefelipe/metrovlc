import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionesFavoritasComponent } from './estaciones-favoritas.component';

describe('EstacionesFavoritasComponent', () => {
  let component: EstacionesFavoritasComponent;
  let fixture: ComponentFixture<EstacionesFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacionesFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionesFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
