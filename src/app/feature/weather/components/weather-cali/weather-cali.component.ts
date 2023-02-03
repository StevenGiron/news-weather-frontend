import { Component, OnInit } from '@angular/core';
import { Weather, WeatherElement } from '../../shared/models/weather';
import { WeatherService } from '../../shared/service/weather.service';

@Component({
  selector: 'app-weather-cali',
  templateUrl: './weather-cali.component.html',
  styleUrls: ['./weather-cali.component.css']
})
export class WeatherCaliComponent implements OnInit {

  weather!: Weather;
  description!: WeatherElement;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    
      this.weatherService.getWeather()
       .subscribe((weather)=>{
          this.weather = weather
       })     
      this.weatherService.getWeather()
       .subscribe((weather)=>{
         this.weather = weather
         for (let index = 0; index < weather.weather.length; index++) {
           const element = weather.weather[0];
           this.description = element     
                
         }
       }) 
       
  }

  
}
