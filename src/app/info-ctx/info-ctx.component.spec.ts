import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCtxComponent } from './info-ctx.component';

describe('InfoCtxComponent', () => {
  let component: InfoCtxComponent;
  let fixture: ComponentFixture<InfoCtxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCtxComponent]
    });
    fixture = TestBed.createComponent(InfoCtxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
