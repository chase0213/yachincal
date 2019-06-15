import { Component, OnInit, AfterViewInit, OnChanges, OnDestroy, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartDataSets, ChartConfiguration } from 'chart.js';
import { Data } from 'src/app/interfaces/data';


@Component({
  selector: 'app-yachingraph',
  templateUrl: './yachingraph.component.html',
  styleUrls: ['./yachingraph.component.scss']
})
export class YachingraphComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('canvas')
  elm: ElementRef;

  @Input()
  title: string = '家賃計算';

  @Input()
  xLabel: string = '居住期間';

  @Input()
  yLabel: string = '一日あたりの実質家賃';

  @Input()
  rawData: Data[] = [];

  @Input()
  dataLabels: string[];

  datasets: ChartDataSets[];

  canvas: CanvasRenderingContext2D;

  config: ChartConfiguration = {
    type: 'line',
    options: {
      responsive: true,
      title: {
        display: true,
        text: this.title,
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      animation: {
        duration: 0
      },
      hover: {
          animationDuration: 0
      },
      responsiveAnimationDuration: 0,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: this.xLabel,
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: this.yLabel,
          },
          ticks: {
            beginAtZero: true,
            min: 0,
          },
        }]
      }
    }
  };
  chart: Chart;
  data: ChartData;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvas = this.elm.nativeElement.getContext('2d');
  }

  ngOnChanges() {
    if (this.rawData && this.rawData.length > 0) {
      this.datasets = [];
      for (let data of this.rawData) {
        let xData = [];
        let yData = [];

        for (let dp of data.datapoints) {
          xData.push(dp.x);
          yData.push(dp.y);
        }

        this.datasets.push({
          label: data.label,
          backgroundColor: data.color,
          borderColor: data.color,
          data: yData,
          fill: false,
        });
      }

      this.draw();
    }
  }

  ngOnDestroy() {}

  draw() {
    this.config.data = {
      labels: this.dataLabels,
      datasets: this.datasets,
    }
    setTimeout(() => {
      this.chart = new Chart(this.canvas, this.config);
    }, 500);
  }


}
