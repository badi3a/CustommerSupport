import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Issues} from 'src/app/model/issues';
import { IssuesService}  from '../shared/issues.service';

@Component({
  selector: 'app-currentissue',
  templateUrl: './currentissue.component.html',
  styleUrls: ['./currentissue.component.css']
})
export class CurrentissueComponent implements OnInit {
  listIssues : Issues[]

  constructor(private service:IssuesService,private router:Router) { }

  ngOnInit(): void {
    this.service.getIssues().subscribe(
      (data : Issues[]) => this.listIssues = data 
    );
  }


  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }  

}
