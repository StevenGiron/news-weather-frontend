import { Component, OnInit } from '@angular/core';
import { Weather } from '../../shared/models/weather';
import { WeatherService } from '../../shared/service/weather.service';

@Component({
  selector: 'app-weather-cali',
  templateUrl: './weather-cali.component.html',
  styleUrls: ['./weather-cali.component.css']
})
export class WeatherCaliComponent implements OnInit {

  weather!: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather()
      .subscribe((weather)=>{
        this.weather = weather
        console.log(this.weather);
        
      })
  }

}
