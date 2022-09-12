import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  courseListjsonArray = courseListjsonArray;
  constructor() { }

  ngOnInit(): void {
  }

}

const courseListjsonArray = [{
  'name': ' IAS / KAS / PSI ',
  'desc': " IAS / KAS / PSI "
}, {
  'name': ' Banking ',
  'desc': " Banking "
}, {
  'name': ' NEET / JEE / PGCET / CMAT ',
  'desc': " NEET / JEE / PGCET / CMAT "
}, {
  'name': ' RAILWAYS / KSRTC / LIC / SSC ',
  'desc': " RAILWAYS / KSRTC / LIC / SSC "
}, {
  'name': ' Others ',
  'desc': " Others "
}];