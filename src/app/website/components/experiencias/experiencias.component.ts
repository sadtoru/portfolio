import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { mockExp } from 'src/app/mock-experiencia';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  @Input() experiencias: Experiencia = mockExp[0];
  @Output() onDeleteExp: EventEmitter <Experiencia> = new EventEmitter;
  faXmark = faXmark;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(experiencias: Experiencia){
    this.onDeleteExp.emit(experiencias);
  }
}
