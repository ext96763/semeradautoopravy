import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { ScrollEvent } from 'ngx-scroll-event';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class AppComponent implements OnInit {

  public max = 100;
  public progress;

  ngOnInit() {
    console.log('Environment API run on ' + environment.APIEndpoint);
  }

  public changeProgress(event: ScrollEvent, value: number): void {

    const docH = document.body.clientHeight;
    console.log('docH', docH);
    const scrT = document.documentElement.scrollTop;
    console.log('scrT', scrT);
    const winH = window.innerHeight;
    console.log('winH', winH);
    const scrP = (scrT / (docH - winH));
    console.log('scrP', scrP);
    const scrollPercentRounded = Math.round(Number((scrP * 100).toFixed(1)));
    console.log('scrollPercentRounded', scrollPercentRounded);
    this.progress = scrollPercentRounded;
  }

}

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true, max: 100 });
}
