import { Component, OnInit, Input} from '@angular/core';

import { Deviation } from '../shared/deviation.model';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.css']
})
export class DeviationComponent implements OnInit {
  @Input()
  deviation: Deviation;

  constructor() { }

  ngOnInit() {
  }

}
