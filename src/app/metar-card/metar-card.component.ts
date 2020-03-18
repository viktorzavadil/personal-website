import { Component, OnInit } from '@angular/core';
import * as metar from 'metar';

@Component({
  selector: 'app-metar-card',
  templateUrl: './metar-card.component.html',
  styleUrls: [ './metar-card.component.sass' ]
})
export class MetarCardComponent implements OnInit {

  public raw: string;
  public data: any;

  constructor() {
  }

  ngOnInit(): void {
    this.raw = 'LKPR 180000Z 24006KT CAVOK 06/05 Q1030 NOSIG,LKPR,2020-03-18T00:00:00Z,50.1,14.27,6.0,5.0,' +
      '240,6,,6.21,30.413385,,,,,,TRUE,,,,,CAVOK,,,,,,,,VFR,,,,,,,,,,,,METAR,365.0';
    this.data = metar(this.raw);
    console.log(this.data);
  }

}
