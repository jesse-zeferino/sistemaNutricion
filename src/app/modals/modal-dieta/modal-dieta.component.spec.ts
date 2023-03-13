import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDietaComponent } from './modal-dieta.component';

describe('ModalDietaComponent', () => {
  let component: ModalDietaComponent;
  let fixture: ComponentFixture<ModalDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDietaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
