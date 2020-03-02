import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichiganWBBComponent } from './michigan-wbb.component';

describe('MichiganWBBComponent', () => {
  let component: MichiganWBBComponent;
  let fixture: ComponentFixture<MichiganWBBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichiganWBBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichiganWBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
