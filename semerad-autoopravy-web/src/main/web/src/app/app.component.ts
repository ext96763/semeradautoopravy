import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { ScrollEvent } from 'ngx-scroll-event';
import { environment } from '../environments/environment';
import * as $ from 'jquery';

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

    // Float button on every page
    {
      $('#zoomBtn').click(function () {
        $('.zoom-btn-sm').toggleClass('scale-out');
        if (!$('.zoom-card').hasClass('scale-out')) {
          $('.zoom-card').toggleClass('scale-out');
        }
      });
      $('.zoom-btn-sm').click(function () {
        const btn = $(this);
        const card = $('.zoom-card');
        if ($('.zoom-card').hasClass('scale-out')) {
          $('.zoom-card').toggleClass('scale-out');
        }
        if (btn.hasClass('zoom-btn-person')) {
          card.css('background-color', '#d32f2f');
        } else if (btn.hasClass('zoom-btn-doc')) {
          card.css('background-color', '#fbc02d');
        } else if (btn.hasClass('zoom-btn-tangram')) {
          card.css('background-color', '#388e3c');
        } else if (btn.hasClass('zoom-btn-report')) {
          card.css('background-color', '#1976d2');
        } else {
          card.css('background-color', '#7b1fa2');
        }
      }).on('mouseup', function() {
        console.log('tlactko odmacknute');
     });
    }
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
