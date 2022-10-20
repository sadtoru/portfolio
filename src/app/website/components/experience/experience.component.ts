import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(
    private experienciaService:ExperienciaService,
    ) { }

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

}
