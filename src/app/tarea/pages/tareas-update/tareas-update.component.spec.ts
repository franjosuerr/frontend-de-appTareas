import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasUpdateComponent } from './tareas-update.component';

describe('TareasUpdateComponent', () => {
  let component: TareasUpdateComponent;
  let fixture: ComponentFixture<TareasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
