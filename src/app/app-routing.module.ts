import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { IssueComponent } from './issue/issue.component';
import { ListviewComponent } from './listview/listview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CurrentissueComponent } from 'src/app/currentissue/currentissue.component'


const routes: Routes = [
  {path: "home" , component:HomeComponent},
  {path: "none" , component:HomeComponent},
  {path : "customers" , component:CustomersComponent},
  {path : "listview" , component:ListviewComponent},
  {path: "addcustomer", component:AddcustomerComponent},
  {path: "customers/info/:id", component:InfoComponent},
  {path : "issue", component:IssueComponent},
  {path : "currentissue", component:CurrentissueComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
