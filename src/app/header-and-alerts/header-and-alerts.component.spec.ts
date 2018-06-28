import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndAlertsComponent } from './header-and-alerts.component';

describe('HeaderAndAlertsComponent', () => {
  let component: HeaderAndAlertsComponent;
  let fixture: ComponentFixture<HeaderAndAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAndAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAndAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
