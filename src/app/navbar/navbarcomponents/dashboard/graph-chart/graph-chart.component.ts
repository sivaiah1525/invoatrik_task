import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Color } from 'ng2-charts';


declare var Pikaday: any;
@Component({
  selector: 'app-graph-chart',
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.css']
})
export class GraphChartComponent implements OnInit {
  formdatePicker:any;
  todatePicker:any;
  @ViewChild('formdateField', { static: true }) formdateField: ElementRef;
  @ViewChild('todateField', { static: true }) todateField: ElementRef;
  @ViewChild('fromdate', { static: true }) fromdate: ElementRef;
  @ViewChild('todate', { static: true }) todate: ElementRef;

  constructor() { }
  // barChart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [ 'SCIENCE', 'MATHS','COMPUTER','MARKETING'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56,], label: 'Students'},
    {data: [28, 48, 40, 19, 86,], label: 'Univarsity'}
  ];
  public barChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: '#d5a461',
    },
  ];
  // lineChart
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = [ 'Feb', 'Mar', 'Apr', 'May ', 'Jun',];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [65, 59, 80, 81,80, 81,], label: 'Students '},
    {data: [28, 48, 40, 19,40, 19,], label: 'Univarsity '}
  ];
  public lineChartColors: Color[] = [
    {
      borderColor: 'block',
      backgroundColor: '#d5a461',
    },
  ];

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
