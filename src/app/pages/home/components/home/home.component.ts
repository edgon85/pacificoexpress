import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgsRevealConfig]
})
export class HomeComponent implements OnInit {

  videoUrl = 'https://player.vimeo.com/video/481099138';

  constructor(public sanitizer: DomSanitizer, public config: NgsRevealConfig) {

    
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.origin = 'left';


  }

  ngOnInit(): void {
  }

}
