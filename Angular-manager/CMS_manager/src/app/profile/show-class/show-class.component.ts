import { Component, OnInit } from '@angular/core';
import { ShowClassService } from 'src/app/service/show-class.service';

@Component({
  selector: 'app-show-class',
  templateUrl: './show-class.component.html',
  styleUrls: ['./show-class.component.css']
})
export class ShowClassComponent implements OnInit {

  constructor(private showClass:ShowClassService) { }
  class:any=[]
  ngOnInit(): void {
    this.listClasses();
  }
  listClasses(){
    this.showClass.showClass().subscribe((data:any)=>{
      for(const [key, value] of Object.entries(data)){
        this.class.push(value)
        console.log(value)
      }
    })
  }

}
