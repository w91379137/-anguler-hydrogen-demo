import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAsyncClickComponent } from './directive-async-click.component';

describe('DirectiveAsyncClickComponent', () => {
  let component: DirectiveAsyncClickComponent;
  let fixture: ComponentFixture<DirectiveAsyncClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveAsyncClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveAsyncClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
