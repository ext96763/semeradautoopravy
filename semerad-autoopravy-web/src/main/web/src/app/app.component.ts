import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { ScrollEvent } from 'ngx-scroll-event';
import { environment } from '../environments/environment';
import * as $ from 'jquery';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class AppComponent implements OnInit {

  public max = 100;
  public progress;

  constructor(private router: Router) {
    this.hideButton();
  }

  ngOnInit() {
    console.log('Environment API run on ' + environment.APIEndpoint);

    // On reroute start page on TOP
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

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
      }).on('mouseup', function () {
      });
    }
  }

  public changeProgress(event: ScrollEvent, value: number): void {

    const docH = document.body.clientHeight;
    const scrT = document.documentElement.scrollTop;
    const winH = window.innerHeight;
    const scrP = (scrT / (docH - winH));
    const scrollPercentRounded = Math.round(Number((scrP * 100).toFixed(1)));
    this.progress = scrollPercentRounded;
  }

  hideButton() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      debounceTime(400)
    ).subscribe(
      x => {
        {
          $('.zoom-btn-sm').toggleClass('scale-out');
        }
      }
    );
  }
}

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true, max: 100 });
}
