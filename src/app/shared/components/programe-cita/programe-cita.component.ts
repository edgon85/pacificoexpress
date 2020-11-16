import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-programe-cita',
  templateUrl: './programe-cita.component.html',
  styleUrls: ['./programe-cita.component.scss'],
})
export class ProgrameCitaComponent implements OnInit {
  @Input() phone: string = '';
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
