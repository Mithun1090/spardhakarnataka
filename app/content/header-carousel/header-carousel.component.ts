import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent implements OnInit {
      imageObject = [{
          image: '../../../assets/images/slide-1.jpg', 
          thumbImage: '../../../assets/images/slide-1.jpg',
          title: 'slide (1).jpg'
      }, {
        image: '../../../assets/images/slide-2.jpg',
        thumbImage: '../../../assets/images/slide-2.jpg',
        title: 'slide (2).jpg'
      }, {
        image: '../../../assets/images/slide-3.jpg',
        thumbImage: '../../../assets/images/slide-3.jpg',  
        title: 'slide (3).jpg'
      }];
  constructor() { }

  ngOnInit(): void {
  }

}
