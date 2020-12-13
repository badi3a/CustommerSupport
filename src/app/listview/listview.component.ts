import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../shared/customers.service';
import {Customer} from 'src/app/model/customers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  listCustomer : Customer[]  = [];
  customer : Customer;
  isDisplayed = true;
  isEdit=false;
  allUser: Object;
  email : string;

  constructor(private service:CustomersService,private router:Router) { }

  ngOnInit(): void {
    this.service.getCustomers().subscribe(
      (data : Customer[]) => this.listCustomer = data 
    );

    this.customer = new Customer();
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  deleteC(id){
    this.service.deleteCustomer(id).subscribe(
      () => this.listCustomer = this.listCustomer.filter(customer => customer.id != id)
    );
  }
  save(){
    this.service.addCustomer(this.customer).subscribe(
      () => this.listCustomer=[this.customer, ...this.listCustomer]
    );

      
  }
  
  showMe()
  {
      if(this.isDisplayed)
      {
          this.isDisplayed = false;
      }else{
          this.isDisplayed = true;
      }
  }

  update(customer){
    this.isEdit=true;
    this.customer= customer;
    if(this.isDisplayed)
    {
        this.isDisplayed = false;
    }else{
        this.isDisplayed = true;
    }
  
  }


updateUser(customer){
  this.isEdit= !this.isEdit;
  this.service.updateCustomer(this.customer).subscribe(
    () => this.listCustomer = this.listCustomer.filter(customer)
  );
  
  }
  Searching(){
    if(this.email==""){
      this.ngOnInit();
    } else {
      this.listCustomer = this.listCustomer.filter( res => {
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase())
      })
    }
  }

}
