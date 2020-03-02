import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichiganFootballComponent } from './michigan-football.component';

describe('MichiganFootballComponent', () => {
  let component: MichiganFootballComponent;
  let fixture: ComponentFixture<MichiganFootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichiganFootballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichiganFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
