import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';

declare var Pikaday: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formdatePicker: any;
  todatePicker :any;
  userdata:any

  
  @ViewChild('formdateField', { static: true }) formdateField: ElementRef;
  @ViewChild('todateField', { static: true }) todateField: ElementRef;
  @ViewChild('fromdate', { static: true }) fromdate: ElementRef;
  @ViewChild('todate', { static: true }) todate: ElementRef;

  constructor(private service :UserserviceService) {
    this.getuser()
   }



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

getuser(){
this.userdata=this.service.AllGetuder().then(data => console.log(data));
console.log('sivaiah')
console.log(this.userdata);
}

}
