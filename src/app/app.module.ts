import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaincontentComponent} from './components/maincontent/maincontent.component';
import {CustomercontentComponent} from './components/customercontent/customercontent.component';
import {ItemcontentComponent} from './components/itemcontent/itemcontent.component';
import {DashboardcontentComponent} from './components/dashboardcontent/dashboardcontent.component';
import {OrdercontentComponent} from './components/ordercontent/ordercontent.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MaincontentComponent,
    CustomercontentComponent,
    ItemcontentComponent,
    DashboardcontentComponent,
    OrdercontentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
