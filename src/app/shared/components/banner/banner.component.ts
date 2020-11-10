import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  images: string[] = [
    'assets/images/banner/slide-2.png',
    'assets/images/banner/slide-1.png',
    'assets/images/banner/slide01.jpg',
    'assets/images/banner/slide-3.jpg',
  ];

  mySwiper: Swiper;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
}
