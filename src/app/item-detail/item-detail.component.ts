import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  city;
  headerInfo;
  curWeather;
  restWeatherArr;
  loading = false;
  scale;

  constructor(private appService: AppService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.city = this.route.snapshot.queryParams['city'];
    this.headerInfo = this.city;
    this.appService.getDailyWeather(this.city).subscribe(data => {
      this.loading = true;
      let result = data.results[0];
      let locationObj = result.location;
      let weathers = result.daily;
      this.curWeather = weathers[0];
      this.restWeatherArr = weathers.slice(1);
    }, (err) => {
      console.log(err);
    })
  }

}
