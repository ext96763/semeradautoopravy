import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

// import {MDCRipple} from '@material/ripple';
// const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule,
MatInputModule, MatDialogModule, MatTableModule, MatIconModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule,
    MatInputModule, MatDialogModule, MatTableModule, MatIconModule],
})
export class CustomMaterialModule { }
