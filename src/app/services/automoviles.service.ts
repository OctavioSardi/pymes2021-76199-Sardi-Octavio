import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Automovil } from '../models/automovil';

@Injectable({
  providedIn: 'root',
})
export class AutomovilesService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'http://pav2.azurewebsites.net/api/automoviles/';
  }

  get(Marca: string) {
    let params = new HttpParams();
    if (Marca != null) {
      params = params.append('Marca', Marca);
    }

    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  getAll() {
    return this.httpClient.get(this.resourceUrl);
  }

  post(obj: Automovil) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
}
