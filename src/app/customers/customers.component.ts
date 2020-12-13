import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/model/customers'
import { CustomersService } from '../shared/customers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  listCustomer : Customer[] = [];
  firstname : string;

 
  

  


  constructor(public service:CustomersService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCustomers().subscribe(
      (data : Customer[]) => this.listCustomer = data 
    );

  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  Search(){
    if(this.firstname==""){
      this.ngOnInit();
    } else {
      this.listCustomer = this.listCustomer.filter( res => {
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase())
      })
    }
  }

}
