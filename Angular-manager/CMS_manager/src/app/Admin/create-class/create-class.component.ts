import { Component, OnInit } from '@angular/core';
import { CreateClassService } from 'src/app/service/create-class.service';
import { CreateCalendarService } from 'src/app/service/create-calendar.service';
@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  name:string=''
  limit:number=0
  lessonStart:string=''
  lessonEnd:string=''
  constructor(private createClass:CreateClassService, private createCalendar:CreateCalendarService) { }

  ngOnInit(): void {
  }
  create(){
      this.createClass.createClass(this.name,this.limit).subscribe((data:any)=>{})
      this.createCalendar.createCalendar(this.lessonStart,this.lessonEnd).subscribe((data:any)=>{})
      alert('done')
  }

}
