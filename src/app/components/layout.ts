import { Component } from '@angular/core';


@Component({
  selector: 'wp-layout',
  template: `
    <md-sidenav-container fullscreen>
      
      <ng-content></ng-content>

    </md-sidenav-container>
  `
})
export class LayoutComponent { }