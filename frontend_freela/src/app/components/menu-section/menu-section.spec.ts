import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionComponent } from './menu-section'; // <-- CORRIGIDO AQUI

describe('MenuSectionComponent', () => { // <-- E AQUI
  let component: MenuSectionComponent; // <-- E AQUI
  let fixture: ComponentFixture<MenuSectionComponent>; // <-- E AQUI

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSectionComponent] // <-- E AQUI
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSectionComponent); // <-- E AQUI
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});