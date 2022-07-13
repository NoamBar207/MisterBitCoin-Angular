import { Component, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.scss']
})

export class PriceChartComponent {
  LineChart = ChartType.LineChart
  @Input() data!: (string | number)[][]

  title: string = 'Market Price(USD)'
  type: ChartType = this.LineChart
  columnNames = ['Date', 'Price']
  options: object = {
    colors: ['#fff'],
    backgroundColor: {
      'fill': 'ffffff',
      'fillOpacity': 0.1
    },
    is3D: true,
    hAxis: {
      textStyle: { color: '#9bd49b' },
    },
    vAxis: {
      textStyle: { color: '#9bd49b' },
    },
    titleTextStyle: {
      color: '#9bd49b',
      fontSize: '18'
    },
    legend: {
      textStyle: { color: '#9bd49b' },
    },
  }
  width: number = 400
  height: number = 350

}
