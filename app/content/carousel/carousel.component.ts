import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  name = 'Angular';
  imageObject = [{
      image: '../../assets/download (1).jpg',
      thumbImage: '../../assets/download (1).jpg',
      title: 'download (1).jpg'
  }, {
     image: '../../assets/download (2).jpg',
     thumbImage: '../../assets/download (2).jpg',
     title: 'download (2).jpg'
  }, {
     image: '../../assets/download (3).jpg',
     thumbImage: '../../assets/download (3).jpg',
     title: 'download (3).jpg'
  },{
      image: '../../assets/download (4).jpg',
     thumbImage: '../../assets/download (4).jpg',
     title: 'download (4).jpg'
  }, {
     image: '../../assets/download (5).jpg',
      thumbImage: '../../assets/download (5).jpg',
      title: 'download (5).jpg'
  }, {
      image: '../../assets/download (6).jpg',
      thumbImage: '../../assets/download (6).jpg',
     title: 'download (6).jpg'
  },{
      image: '../../assets/download (7).jpg',
      thumbImage: '../../assets/download (7).jpg',
      title: 'download (7).jpg'
}, {
      image: '../../assets/download (8).jpg',
      thumbImage: '../../assets/download (8).jpg',
      title: 'download (8).jpg'
}];

  constructor() {
  }
  
  ngOnInit(): void {
  }
 
}
