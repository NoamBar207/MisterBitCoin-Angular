import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { lastValueFrom, map } from "rxjs";
import { PriceData } from "../models/price.data.model";
import { StorageService } from "./storage.service";




@Injectable({
    providedIn: 'root'
})

export class BitcoinService {
    constructor(
        private http: HttpClient,
        private storageService: StorageService
    ) { }

    public getRate() {
        return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${1}`)
    }

    async getHistory(key: string, type: string): Promise<PriceData[]> {
        let history = await this.storageService.loadFromStorage(key)
        if (!history || history.length) {
            history = await lastValueFrom(this.fetchHistory(type))
            this.storageService.saveToStorage(key, history)
        }
        return history
    }

    fetchHistory(type: string) {
        const url = type === 'trade-volume' ?
            'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true' :
            'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'

        return this.http.get<{ values: object[] }>(url)
            .pipe(
                map(res => res.values)
            )
    }
}