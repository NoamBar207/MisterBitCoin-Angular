import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(
    private bitcoinService: BitcoinService
  ) { }

  TRANSACTIONS_HISTORY_KEY: string = 'transactions-historyDB'
  PRICE_HISTORY_KEY: string = 'price-hDB'
  priceData!: (string | number)[][]
  transactionHistoryData!: (string | number)[][]

  async ngOnInit() {
    const data = await this.bitcoinService.getHistory(this.PRICE_HISTORY_KEY, 'market-price')
    let priceData: (string | number)[][] = []
    data.forEach(({ x, y }) => {
      const newDate = new Date(x * 1000)
      const dateToDisplay = new Intl.DateTimeFormat('en-US').format(newDate)
      priceData.push([dateToDisplay, y])
    })
    this.priceData = priceData

    const data2 = await this.bitcoinService.getHistory(this.TRANSACTIONS_HISTORY_KEY, 'trade-volume')
    let transactionHistoryData: (string | number)[][] = []
    data2.forEach(({ x, y }) => {
      const newDate = new Date(x * 1000)
      const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
      transactionHistoryData.push([dateToDisplay, y])
    })
    this.transactionHistoryData = transactionHistoryData
  }

}
