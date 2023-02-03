import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherCaliComponent } from './components/weather-cali/weather-cali.component';

const routes:Routes = [
  {
    path:'',
    children: [
      {
        path:'cali',
        component: WeatherCaliComponent
      },
      
      {
        path: '**',
        redirectTo: 'cali'
      },
    ]
  }
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
