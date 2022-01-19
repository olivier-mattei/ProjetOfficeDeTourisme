import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageBibliothequeComponent } from './affichage-bibliotheque.component';


describe('AffichageBibliothequeComponent', () => {
  let component: AffichageBibliothequeComponent;
  let fixture: ComponentFixture<AffichageBibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageBibliothequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
