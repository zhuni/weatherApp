import { Component, OnInit, Input, trigger, state, transition, style, group, animate } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-weather-list-item',
  templateUrl: './weather-list-item.component.html',
  styleUrls: ['./weather-list-item.component.scss'],
  animations: [
  trigger('flyInOut', [
    state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 120
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]),
  trigger('roate',[
    state('active', style({transform: 'scale(1.1) rotate(360deg)'})),
    state('inactive', style({transform: 'scale(1) rotate(0)'})),
    transition('inactive => active', animate('1000ms ease-in')),
    transition('active => inactive', animate('1000ms ease-out'))
  ])

]
})
export class WeatherListItemComponent implements OnInit {
  @Input() city;
  cityName;
  weather;
  temperature;
  loading = true;
  animation;
  rotate = 'inactive';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getWeather(this.city).subscribe(data => {
      this.loading = false;
      let result = data.results[0];
      this.cityName = result.location.name;
      this.weather = result.now;
      if (this.weather.code >= 4) {
        setInterval(() => {
          if (this.rotate == 'inactive') {
            this.rotate = 'active';
          } else {
            this.rotate = 'inactive';
          }
        }, 1000)
      }
    }, (err) => {
      console.log(err);
    })
  }

}
