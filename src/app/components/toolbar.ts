import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wp-toolbar',
  template: `
    <md-toolbar color="primary">
      <span>
      <button md-button>{{title}}</button>
      <button md-button (click)="openList.emit()">Open List</button>
      <button md-button (click)="closeList.emit()">Close List</button>
      <button md-button (click)="toggleFilterBar.emit()">Toggle Filters</button>
    </span>
      <span class="fill-remaining-space"></span>
      <span>
      <button md-icon-button [md-menu-trigger-for]="menu">
        <md-icon>more_vert</md-icon>
      </button>
      <md-menu #menu="mdMenu">
        <button md-menu-item (click)="openList.emit()">Open List</button>
        <button md-menu-item (click)="closeList.emit()">Close List</button>
        <button md-menu-item (click)="toggleFilterBar.emit()">Toggle Filters</button>
        <button md-menu-item disabled> Sign Out </button>
      </md-menu>
    </span>
    </md-toolbar>
  `,
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }
  `]
})
export class ToolbarComponent {
  title = "WEPLUS"
  @Output() openList = new EventEmitter();
  @Output() closeList = new EventEmitter();
  @Output() toggleFilterBar = new EventEmitter();
}
