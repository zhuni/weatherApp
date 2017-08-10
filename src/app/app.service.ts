import { Injectable, OnInit } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private key = 'ipbwzznvj4kvnrkq';
  constructor(private http: Http) {}

  getWeather(city) {
    return this.http.get(`https://api.seniverse.com/v3/weather/now.json?key=${this.key}&location=${city}`)
            .map(data => data.json())
            .catch(err => { return Observable.throw(err); })
  }

  getDailyWeather(city) {
    return this.http.get(`https://api.seniverse.com/v3/weather/daily.json?key=${this.key}&location=${city}&language=zh-Hans&unit=c&start=0&days=15`)
            .map(data => data.json())
            .catch(err => { return Observable.throw(err); })
  }

}
