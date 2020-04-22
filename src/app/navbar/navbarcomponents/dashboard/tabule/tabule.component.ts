import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabule',
  templateUrl: './tabule.component.html',
  styleUrls: ['./tabule.component.css']
})
export class TabuleComponent implements OnInit {
  userdetails: any;
  constructor() { }

  ngOnInit(): void {


    this.userdetails = [
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
      {
        img: "",
        name: 'Technical Univarsity of Munich',
        activeDate: "Active 3 days ago",
        tutors :'976',
        students:'578',
        addedon :'16 sep 2018',
        city:''
      },
   
    ]


  }

}
