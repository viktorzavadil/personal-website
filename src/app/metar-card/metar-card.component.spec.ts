import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetarCardComponent } from './metar-card.component';

describe('MetarCardComponent', () => {
  let component: MetarCardComponent;
  let fixture: ComponentFixture<MetarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
