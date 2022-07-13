import { Component, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-transaction-history-chart',
  templateUrl: './transaction-history-chart.component.html',
  styleUrls: ['./transaction-history-chart.component.scss']
})
export class TransactionHistoryChartComponent {
  @Input() data!: (string | number)[][]

  title: string = 'Confirmed Transaction Per Day'
  type: ChartType = ChartType.LineChart
  columnNames = ['Date', 'Transaction']
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
