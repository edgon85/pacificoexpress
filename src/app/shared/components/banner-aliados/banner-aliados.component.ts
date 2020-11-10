import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner-aliados',
  templateUrl: './banner-aliados.component.html',
  styleUrls: ['./banner-aliados.component.scss'],
})
export class BannerAliadosComponent implements OnInit, AfterViewInit {
  marcas: string[] = [
    'assets/images/logos/logo-gris.png',
    'assets/images/logos/logo-gris.png',
    'assets/images/logos/logo-gris.png',
    'assets/images/logos/logo-gris.png',
    'assets/images/logos/logo-gris.png',
    'assets/images/logos/logo-gris.png',
  ];

  mySwiper: Swiper;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container-aliados', {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
}
