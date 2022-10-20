import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ShowFormService } from 'src/app/services/show-form.service';
import {Subscription } from 'rxjs'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencia: Experiencia[] = [];

  showAddExp: boolean = true;
  subscription?: Subscription ;

  constructor(
    private experienciaService:ExperienciaService,
    private showForm: ShowFormService
    ) {
      this.subscription= this.showForm.onToggle().subscribe( data =>
        this.showAddExp = data
      )
     }

  ngOnInit(): void {
    this.experienciaService.getExp().subscribe((data)=>{
      this.experiencia = data
    } )
  }
  
  deleteExp(exp: Experiencia){
    this.experienciaService.deleteExp(exp).subscribe(() => {
      this.experiencia = this.experiencia.filter((exp) => exp.id !== exp.id)
    })
  }

  addExp(exp: Experiencia){
    this.experienciaService.addExp(exp).subscribe(data =>{
      this.experiencia.push(data)
    })
  }

  toggleAddExp(){
    this.showForm.toggleShowForm();
  }
}
