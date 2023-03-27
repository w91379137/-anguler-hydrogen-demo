import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFloatingActionMenuCustomComponent } from './component-floating-action-menu-custom.component';

describe('ComponentFloatingActionMenuCustomComponent', () => {
  let component: ComponentFloatingActionMenuCustomComponent;
  let fixture: ComponentFixture<ComponentFloatingActionMenuCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFloatingActionMenuCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFloatingActionMenuCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
