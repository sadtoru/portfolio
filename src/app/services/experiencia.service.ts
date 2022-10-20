import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia.model';
import { mockExp } from '../mock-experiencia';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
private apiUrl = 'http://localhost:3000/experiencias'
  constructor(
    private http:HttpClient
  ) { }

  getExp(): Observable <Experiencia[]>{
     return this.http.get<Experiencia[]>(this.apiUrl)
  }

  deleteExp(exp: Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}/${exp.id}`
    return this.http.delete<Experiencia>(url);
  }

  addExp(exp: Experiencia): Observable <Experiencia>{
    return this.http.post <Experiencia>(this.apiUrl, exp)
  }
}
