import { Component, OnInit } from '@angular/core';
import { SubmitRegisterService } from 'src/app/service/submit-register.service';

@Component({
  selector: 'app-manager-register',
  templateUrl: './manager-register.component.html',
  styleUrls: ['./manager-register.component.css']
})
export class ManagerRegisterComponent implements OnInit {
  listRe:any = []
  result:string =""
  constructor(private list:SubmitRegisterService) { }
  ngOnInit(): void {
    this.listRegister()
    console.log(this.result)
  }
  
  listRegister(){
    this.list.getRegister().subscribe((data:any)=>{
      for(const [key, value]of Object.entries(data)){
        this.listRe.push(value);
      }
    })
  }

  
}
