import { ClientiData } from './interfaces/clienti-data';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Clienti } from './classes/clienti';
import { Client } from './classes/client';


@Injectable({
  providedIn: 'root'
})
export class ClientiService {


  clienti = 'api/clienti?page=0&size=20&sort=id,ASC';
  tenantID = 'fe_0621';
  brearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTIwNCwiZXhwIjoxNjQzOTA1MjA0fQ.D5zyEp-3vbU0HkaYrB0AW2Ri9__Ogl9_HTdtivDEh-FWVq9si1nzq4OVi9pK1eB-QBGSyIIg-PR97VRdGo127A';
  headers = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers = this.headers
      .set("Authorization", this.brearerToken)
      .set("X-TENANT-ID", this.tenantID)
  }

  getAllClienti() {
    // return this.http.get<ClientiData>(environment.base + 'api/clienti?page=0&size=20&sort=id,ASC', { headers: this.headers })
    return this.http.get<Clienti>(environment.clienti, { headers: this.headers });
  }

  getClientById(id: number) {
    return this.http.get<Client>(environment.clientiById + id, { headers: this.headers });
  }
  addClient(item: Client) {
    return this.http.get<Client>(environment.clientiById + item, { headers: this.headers });
  }
  removeClient(item: Client) {
    return this.http.delete<Client>(environment.clientiById + item.id, { headers: this.headers });
  }
  aggiungiClient(cliente: Client) {
    return this.http.put<Client>(environment.clientiById + cliente.id + cliente, { headers: this.headers })
  }
}
