import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { Datapoint } from 'src/app/interfaces/datapoint';
import { Bukken } from 'src/app/interfaces/bukken';

@Component({
  selector: 'app-yachincal',
  templateUrl: './yachincal.component.html',
  styleUrls: ['./yachincal.component.scss']
})
export class YachincalComponent implements OnInit {

  colors: string[] = [];
  rawData: Data[] = [];
  labels: string[] = [];

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    for (let i=0; i<16; i++) {
      this.colors.push(`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`);
    }
  }

  onCompare(bukkens: Bukken[]) {
    this.rawData = [];
    this.labels = [];

    const maxMonth = 24;
    for (let m = 1; m <= maxMonth; m++) {
      this.labels.push(`${m}ヶ月`);
    }

    let i = 1;
    for (let bukken of bukkens) {
      let label = `物件${i}`;
      let d: Data = {
        label: label,
        color: this.colors[i % this.colors.length],
        datapoints: [],
      }

      for (let m = 1; m <= maxMonth; m++) {
        let dp: Datapoint = {
          x: 0.0,
          y: 0.0,
          label: `家賃${bukken.yachin}万円, 礼金${bukken.reikin}万円, ${m}ヶ月`,
        };

        dp.y = bukken.yachin + bukken.reikin / m;
        d.datapoints.push(dp);
      }
      this.rawData.push(d);

      // 物件No.
      i++;
    }
  }
}
