import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEstacionesComponent } from './listado-estaciones.component';

describe('ListadoEstacionesComponent', () => {
  let component: ListadoEstacionesComponent;
  let fixture: ComponentFixture<ListadoEstacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEstacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEstacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
