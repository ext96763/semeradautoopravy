import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let filter;

    {
      $('#search').keyup(function () {
        $('.card').removeClass('d-none');
        filter = $(this).val(); // get the value of the input, which we filter on
        $('.card-deck').find('.card .card-body h4:not(:contains("' + filter + '"))').parent().parent().addClass('d-none');
      });
    }


  //   $('#search').keyup(function () {
  //     $('.card').removeClass('d-none');
  //     const filter = $(this).val(); // get the value of the input, which we filter on

  //     /* Iterate over each title */
  //     $('.card-deck').find('.card .card-body h4').each(function() {
  //         const $this = $(this); // Assign alias to 'this'
  //         if ($this.text().toUpperCase() !== filter.toUpperCase()) {
  //             // If both uppercase values don't match
  //             $this.parent().parent().addClass('d-none'); }

  //     });
  // });

  }

}
