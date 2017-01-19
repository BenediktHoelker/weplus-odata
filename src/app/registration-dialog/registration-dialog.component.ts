import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-registration-dialog',
  template: `<h1 md-dialog-title>Dialog</h1>
<div md-dialog-content>What would you like to do?</div>
<div md-dialog-actions>
  <button md-button (click)="dialogRef.close('Option 1')">Option 1</button>
  <button md-button (click)="dialogRef.close('Option 2')">Option 2</button>
</div>`
})
export class RegistrationDialogComponent {
  deviationTypes;
  private type;
  constructor(public dialogRef: MdDialogRef<RegistrationDialogComponent>) { }
}