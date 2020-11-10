import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
declare function init_plugin();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // isCollapsed: boolean = false;
  // expandir: string = 'show';
  // noExpandor: string = '';
  urlPath = '';

  constructor(public sidebarService: SidebarService, public route: Router) {
   /*  this.route.events
      .pipe(
        filter((evento) => evento instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map((evento: ActivationEnd) => evento.snapshot.routeConfig)
      )
      .subscribe((resp) => {
        this.urlPath = resp.path;
        console.log(this.urlPath);
      }); */
  }

  ngOnInit(): void {
    init_plugin();
  }
}
