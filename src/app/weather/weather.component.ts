import { Component, OnInit } from '@angular/core';
import {   ActivatedRoute,Router } from '@angular/router';
import { NewsApiService } from '../news-api.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
    title = 'THE TREE';
  
      mLocations:Array<any>;
      mCurrents:Array<any>;
     mForecasts:Array<any>;
    constructor(private newsapi:NewsApiService,private router: Router, private route: ActivatedRoute){
    }
    ngOnInit() {
      this.newsapi.initItems().subscribe(data=> this.mLocations= data['location']);
      this.newsapi.initItemsByCondition().subscribe(data=> this.mCurrents= data['current']);
      this.newsapi.initItemsByForecast().subscribe(data=> this. mForecasts= data['forecast.forecastday.day']);
  }
  search(location){
    this.newsapi.getArticleBySer(location).subscribe(data => this.mLocations = data['location']);
    this.newsapi.getArticleBySer(location).subscribe(data => this.mCurrents = data['current']);
    this.newsapi.getArticleBySer(location).subscribe(data => this.mForecasts = data['forecast.forecastday.day']);

 }
}
 

  
  
  
  

