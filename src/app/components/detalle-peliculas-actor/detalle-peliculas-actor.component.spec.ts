import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePeliculasActorComponent } from './detalle-peliculas-actor.component';

describe('DetallePeliculasActorComponent', () => {
  let component: DetallePeliculasActorComponent;
  let fixture: ComponentFixture<DetallePeliculasActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePeliculasActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePeliculasActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
