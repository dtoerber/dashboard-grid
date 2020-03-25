import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  // Pie
  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: true,
  //   legend: {
  //     position: 'top',
  //   },
  //   plugins: {
  //     datalabels: {
  //       formatter: (value, ctx) => {
  //         const label = ctx.chart.data.labels[ctx.dataIndex];
  //         return label;
  //       },
  //     },
  //   },
  // };
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          return '';
        },
      },
    },
  };

  public pieChartLabels: Label[] = ['Download', 'Store', 'Post'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    // {
    //   backgroundColor: [
    //     'rgba(255,0,0,0.3)',
    //     'rgba(0,255,0,0.3)',
    //     'rgba(0,0,255,0.3)',
    //   ],
    // },
  ];

  constructor() {}

  ngOnInit() {}

  chartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        console.log(clickedElementIndex, label, value);
      }
    }
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position =
      this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }
}
