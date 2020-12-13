import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomersComponent } from './customers/customers.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListviewComponent } from './listview/listview.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { InfoComponent } from './info/info.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { IssueComponent } from './issue/issue.component';
import { ActiveissueComponent } from './shared/activeissue/activeissue.component';
import { CurrentissueComponent } from './currentissue/currentissue.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    CustomersComponent,
    ListviewComponent,
    AddcustomerComponent,
    InfoComponent,
    IssueComponent,
    ActiveissueComponent,
    CurrentissueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
