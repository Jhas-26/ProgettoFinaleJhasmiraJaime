import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { HttpFatture } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FattureService {

  fatture = 'api/fatture?page=0&size=20&sort=id,ASC'
  tenantID = 'fe_0621';
  brearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTIwNCwiZXhwIjoxNjQzOTA1MjA0fQ.D5zyEp-3vbU0HkaYrB0AW2Ri9__Ogl9_HTdtivDEh-FWVq9si1nzq4OVi9pK1eB-QBGSyIIg-PR97VRdGo127A';
  headers = new HttpHeaders();

  /*constructor(private http: HttpFatture) {
    this.headers = this.headers
    .set("Authorization", this.brearerToken)
    .set("X-TENANT-ID", this.tenantID)
   }
   getAllClienti() {
    // return this.http.get<ClientiData>(environment.base + 'api/clienti?page=0&size=20&sort=id,ASC', { headers: this.headers })
    return this.http.get<Fattur>(environment.clienti, { headers: this.headers });
  }*/
}
