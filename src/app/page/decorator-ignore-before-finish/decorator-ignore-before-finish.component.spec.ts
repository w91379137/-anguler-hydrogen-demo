import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorIgnoreBeforeFinishComponent } from './decorator-ignore-before-finish.component';

describe('DecoratorIgnoreBeforeFinishComponent', () => {
  let component: DecoratorIgnoreBeforeFinishComponent;
  let fixture: ComponentFixture<DecoratorIgnoreBeforeFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorIgnoreBeforeFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorIgnoreBeforeFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
