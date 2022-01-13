import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-calendar-study',
  templateUrl: './calendar-study.component.html',
  styleUrls: ['./calendar-study.component.css']
})
export class CalendarStudyComponent implements OnInit {

  constructor(private calendar:CalendarService) { }
  calendarUser:any=[]
  Calendars:any=[]
  ngOnInit(): void {
  }
  getCalendar() {
    this.calendar.getCalendar().subscribe((data:any)=>{
      this.calendarUser.push(data);
      this.Calendars=data.calendars[0]
    })
  }
}
