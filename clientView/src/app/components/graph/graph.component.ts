import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { registerables } from 'chart.js';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphComponent implements OnInit, OnChanges {
  @Input()
  chartType: string;
  @Input()
  data = new Array<number>();
  @Input()
  labels: string[];
  chasrtCanvas: any;
  @ViewChild('Canvas')
  canvas: ElementRef<HTMLCanvasElement>;
  constructor() {
    Chart.register(...registerables)
  }
  ngOnChanges(changes: SimpleChanges): void {
    const { data, labels, chartType, canvas } = this;
    const backgroundColor = data.map(val => {
      let val1 = Number(Math.floor(256 * Math.random())).toString(16);
      let val2 = Number(Math.floor(256 * Math.random())).toString(16);
      let val3 = Number(Math.floor(256 * Math.random())).toString(16);
      return `#${val1}${val2}${val3}`;
    });
    if (data && labels && chartType && canvas) {
      const dataset = [
        {
          type:'bar',
          data,
          labels,
          backgroundColor
        },
        {
          type:'line',
          data,
          labels,
          backgroundColor
        },
        {
          type:'scatter',
          data,
          labels,
          backgroundColor
        },
      ];
      const context = this.canvas.nativeElement.getContext('2d');
      this.canvas.nativeElement.height = 260;
      const chartCanvas = new Chart(context, {
      //  type: chartType || "line",
        data: {
          datasets: dataset,
          labels,
        },
        options: {
          responsive: true
        }
      });
    }

  }


  ngOnInit(): void {

  }


}
