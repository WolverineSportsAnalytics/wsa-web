import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichiganHockeyComponent } from './michigan-hockey.component';

describe('MichiganHockeyComponent', () => {
  let component: MichiganHockeyComponent;
  let fixture: ComponentFixture<MichiganHockeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichiganHockeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichiganHockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
