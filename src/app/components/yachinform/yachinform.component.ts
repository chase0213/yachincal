import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bukken } from 'src/app/interfaces/bukken';

@Component({
  selector: 'app-yachinform',
  templateUrl: './yachinform.component.html',
  styleUrls: ['./yachinform.component.scss']
})
export class YachinformComponent implements OnInit {

  @Output()
  compare = new EventEmitter<Bukken[]>();

  nDefaultComparison: number = 2;
  bukkens: Bukken[] = [];

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    for (let i=0; i<this.nDefaultComparison; i++) {
      this.bukkens.push({
        yachin: 10.0,
        shikikin: 0.0,
        reikin: 0.0,
      });
    }
  }

  onChangeValue(event) {
    this.compare.emit(this.bukkens);
  }

  onClickAddBukken(event) {
    this.bukkens.push({
      yachin: 10.0,
      shikikin: 0.0,
      reikin: 0.0,
    });
  }

}
