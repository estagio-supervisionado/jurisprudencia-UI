import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private urlApi = 'https://jurisprudencia-admin-api.tjmt.jus.br/api/consulta/Acordao';

  constructor(private http: HttpClient) { }

  load(termo: string, page: number, pageSize: number) {
    const url = this.getUrlConsulta(termo, page, pageSize);
    return this.http.get(url)
    .pipe(delay(1500));
  }

  getUrlConsulta(termo: string, page: number, pageSize: number) {
    return `${this.urlApi}?DocumentoTexto=${termo}&Indice=${page}&Quantidade=${pageSize}`;
  }
}
