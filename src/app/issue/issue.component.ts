import { Component, OnInit } from '@angular/core';
import { IssuesService}  from '../shared/issues.service';
import {Issues} from 'src/app/model/issues';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  listIssues : Issues[];
    issues : Issues;
    registerForm:FormGroup;

  constructor(private service:IssuesService,private router:Router) { }

  ngOnInit(): void {
    this.issues= new Issues();
    this.registerForm= new FormGroup ({
      subject : new FormControl('', Validators.required),
      Complain_msg : new FormControl('',Validators.required),
      Name : new FormControl('',Validators.required),
      Employee_ID : new FormControl('',Validators.required)
    })

    
    
  }

  save(){
    this.service.addIssues(this.registerForm.value).subscribe(
      () => this.listIssues=[this.registerForm.value, ...this.listIssues]
      
    );

}

submit(){
  console.log(this.registerForm.value);
}
reset(){
  this.registerForm.reset();
}

goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}
}
