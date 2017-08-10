import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerInfo;
  display = false;
  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      if (JSON.stringify(data) !== '{}') {
        this.headerInfo = data.city;
        this.display = true;
      } else {
        this.headerInfo = 'Weather App';
        this.display = false;
      }
    })
  }

  back() {
    this.router.navigate(['']);
  }



}
