import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterUtilisateursComponent } from './consulter-utilisateurs.component';

describe('ConsulterUtilisateursComponent', () => {
  let component: ConsulterUtilisateursComponent;
  let fixture: ComponentFixture<ConsulterUtilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulterUtilisateursComponent]
    });
    fixture = TestBed.createComponent(ConsulterUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
