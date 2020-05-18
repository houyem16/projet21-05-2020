import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Projet} from '../classes/projet';
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  urlapi = environment.api;

  constructor(private http: HttpClient) { }

  get_all_projets() {
    return this.http.get<Projet[]>(`${this.urlapi}projet`);
  }
}
