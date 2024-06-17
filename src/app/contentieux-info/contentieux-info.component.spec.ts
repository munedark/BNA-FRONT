import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentieuxInfoComponent } from './contentieux-info.component';

describe('ContentieuxInfoComponent', () => {
  let component: ContentieuxInfoComponent;
  let fixture: ComponentFixture<ContentieuxInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentieuxInfoComponent]
    });
    fixture = TestBed.createComponent(ContentieuxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
