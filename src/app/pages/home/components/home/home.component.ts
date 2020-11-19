import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoUrl = 'https://player.vimeo.com/video/481099138';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
