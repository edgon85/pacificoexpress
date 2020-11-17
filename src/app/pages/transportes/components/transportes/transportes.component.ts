import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.scss'],
})
export class TransportesComponent implements OnInit, AfterViewInit {
  images: string[] = [
    'assets/images/transporte/banner-1.jpg',
    'assets/images/transporte/banner-2.jpg',
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
      spaceBetween: 10,
      loop: false,
      autoplay: {
        delay: 5000,
        // disableOnInteraction: false,
      },
    });
  }
}
