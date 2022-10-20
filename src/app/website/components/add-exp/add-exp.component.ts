import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {
  @Output() onAddExp: EventEmitter <Experiencia> = new EventEmitter();
  
  nombre:string = "";
  duracion:string = "";
  descripcion:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length === 0){
      alert("Completa los campos");
      return
    }
    const {nombre, duracion, descripcion} = this
    const newExp = {nombre, duracion, descripcion}
    this.onAddExp.emit(newExp)
  }

}
