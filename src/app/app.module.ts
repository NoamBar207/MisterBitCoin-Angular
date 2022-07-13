import { GoogleChartsModule } from 'angular-google-charts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact.app/contact.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDeatailsComponent } from './pages/contact-deatails/contact-deatails.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { PriceChartComponent } from './cmps/price-chart/price-chart.component';
import { TransactionHistoryChartComponent } from './cmps/transaction-history-chart/transaction-history-chart.component';
import { FilterArrPipe } from './pipes/filter-arr.pipe';
import { ContactTransferComponent } from './cmps/contact.transfer/contact.transfer.component';
import { TransferHistoryComponent } from './cmps/transfer-history/transfer-history.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { MsgModalComponent } from './cmps/msg-modal/msg-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDeatailsComponent,
    ContactFilterComponent,
    HomepageComponent,
    EditContactComponent,
    AppHeaderComponent,
    ChartsComponent,
    PriceChartComponent,
    TransactionHistoryChartComponent,
    FilterArrPipe,
    ContactTransferComponent,
    TransferHistoryComponent,
    FooterComponent,
    MsgModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
