import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { WeatherCaliComponent } from './components/weather-cali/weather-cali.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    WeatherCaliComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
