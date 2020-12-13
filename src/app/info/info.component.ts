import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/model/customers'
import { CustomersService } from '../shared/customers.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  listCustomer : Customer[];
  jiji:string;
  data:any;
  customer = new Customer()
  id = this.route.snapshot.paramMap.get('id');
  
  
  

  constructor(private service:CustomersService,private route: ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    this.service.getspec(this.id).subscribe(data=>{
      this.data=data;
    }

      )
      
      
      
    }

    backClicked() {
      this._location.back();
    }
    
    deleteCC(id){
      this.service.deleteCustomer(id).subscribe(
        () => this.listCustomer = this.listCustomer.filter(customer => customer.id != id)
      );
    }
  }




