import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShowFormService {
  private showForm: boolean = false;
  private subject = new Subject <any>();

  constructor() { }

  toggleShowForm():void{
    this.showForm = !this.showForm;
    this.subject.next(this.showForm);
  }

  onToggle(): Observable <any>{
    return this.subject.asObservable();
  }
}
