import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCaliComponent } from './weather-cali.component';

describe('WeatherCaliComponent', () => {
  let component: WeatherCaliComponent;
  let fixture: ComponentFixture<WeatherCaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
