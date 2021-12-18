import { Component, OnInit ,ViewChild} from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
  ApexLegend,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  subtitle: ApexTitleSubtitle;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  diff = 8;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Tollfree Number",
          data: [30,20,25],
          color: "#E21A4F",
        },
        {
          name: "Virtual Number",
          data: [30,30,15],
          color: "#0D83DA",
        },
      ],
      xaxis: {
        categories: ["India","Austria","Bangladesh"],

        labels: {
          style: {
            // colors: ['#9aa0ac']
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            // colors: '#9aa0ac',
          },
        },
        min: 5,
        max: 45,
        tickAmount: this.diff,
      },
      markers: {
        shape: "circle",
        size: 6,
      },
      chart: {
        width: "100%",
        height: 285,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },

      // dataLabels: {
      //   enabled: true,
      // },
      stroke: {
        lineCap: "butt",
        dashArray: 0,
        curve: "smooth",
      },

      grid: {
        row: {
          // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
    };
    //Apexchart ends
  }

}
