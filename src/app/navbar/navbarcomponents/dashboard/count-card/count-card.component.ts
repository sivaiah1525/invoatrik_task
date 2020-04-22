import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.css']
})
export class CountCardComponent implements OnInit {
  carddetails : any;
  constructor() { }

  ngOnInit(): void {



    this.carddetails = [
      {
        avaragecount: "85k",
        name: 'institutions Added',
        image: "https://vere-360.web.app/assets/dashboard/count-1.svg",
        bgColor :'white'

      },
      {
        avaragecount: '754k',
        name: 'Total studant',
        image: "https://vere-360.web.app/assets/dashboard/count-4.svg",
        bgColor : '#ef972c'
      },
      {
        avaragecount: '306k',
        name: 'Total Tutors',
        image: "https://vere-360.web.app/assets/dashboard/count-1.svg",
        bgColor :'white'
      },
      {
        avaragecount: '13k',
        name: 'Total Added ',
        image: "https://vere-360.web.app/assets/dashboard/count-4.svg",
        bgColor:'white'
      }
    ]
  }

}
