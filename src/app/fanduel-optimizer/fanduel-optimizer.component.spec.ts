import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanduelOptimizerComponent } from './fanduel-optimizer.component';

describe('FanduelOptimizerComponent', () => {
  let component: FanduelOptimizerComponent;
  let fixture: ComponentFixture<FanduelOptimizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanduelOptimizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanduelOptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
