import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Pikaday: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formdatePicker: any;
  todatePicker :any;

  
  @ViewChild('formdateField', { static: true }) formdateField: ElementRef;
  @ViewChild('todateField', { static: true }) todateField: ElementRef;
  @ViewChild('fromdate', { static: true }) fromdate: ElementRef;
  @ViewChild('todate', { static: true }) todate: ElementRef;

  constructor() { }



  ngOnInit(): void {
    this.formdatePicker = new Pikaday({
      field: this.formdateField.nativeElement,
      trigger: this.fromdate.nativeElement,
      format: 'D/M/YYYY',
    })
    this.todatePicker = new Pikaday({
      field: this.todateField.nativeElement,
      trigger: this.todate.nativeElement,
      format: 'D/M/YYYY',
    })




  }


}
