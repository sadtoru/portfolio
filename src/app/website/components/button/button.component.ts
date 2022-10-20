import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  faPlus = faPlus;
  @Output() abrirExp = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
