import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  cityList = ['北京', '武汉', '成都', '重庆', '上海', '杭州'];
  headerInfo = 'WeatherApp';
  addCityName;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addCity() {
    this.cityList.push(this.addCityName);
  }

  onSelect(city) {
    this.router.navigate(['/detail'], {queryParams: {city: city}});
  }
}
