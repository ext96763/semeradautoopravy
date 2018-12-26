import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import * as $ from 'jquery';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    const router = this.injector.get(Router);
    console.log(`Request URL: ${router.url}`);

    if (error instanceof HttpErrorResponse) {
      console.log('Backend returned status code: ', error.status);
      console.log('Response body: ', error.message);
      console.log('Response statusText: ', error.statusText);
      Swal({
        title: 'Chyba! ' + error.status,
        text: 'Zprava: ' + error.message,
        type: 'error',
        confirmButtonText: 'OK',
      });

    } else {
      console.log('An error occurred: ', error.message);
    }

    // router.navigate(['/']);

  }

}
