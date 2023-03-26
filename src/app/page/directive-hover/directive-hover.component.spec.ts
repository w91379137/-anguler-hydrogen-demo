import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveHoverComponent } from './directive-hover.component';

describe('DirectiveHoverComponent', () => {
  let component: DirectiveHoverComponent;
  let fixture: ComponentFixture<DirectiveHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
