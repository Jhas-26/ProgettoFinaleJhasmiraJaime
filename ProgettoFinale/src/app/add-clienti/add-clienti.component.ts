import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-add-clienti',
  templateUrl: './add-clienti.component.html',
  styleUrls: ['./add-clienti.component.css']
})
export class AddClientiComponent implements OnInit {

  cliente!: Client;
  tipoCliente: string[] = [];
  nuovocliente = {

    "ragioneSociale": "Bruno-Romano SPA - TEST",
    "partitaIva": "14812266616",
    "tipoCliente": "SRL",
    "email": "rosalino.caruso@gmail.com",
    "pec": "antonio.damico@gmail.com",
    "telefono": "+38 855 62 44 5685",
    "nomeContatto": "Sarita",
    "cognomeContatto": "Serr",
    "telefonoContatto": "380.260.3225",
    "emailContatto": "armando.martinelli@hotmail.com",
    "indirizzoSedeOperativa": {
      "via": "Contrada Gastone 4, Piano 4",
      "civico": "698",
      "cap": "38615",
      "localita": "Vania del friuli",
      "comune": {
        "id": 1,
        "nome": "LASTRA A SIGNA",
        "provincia": {
          "id": 1,
          "nome": "FIRENZE",
          "sigla": "FI"
        }
      }
    },
    "indirizzoSedeLegale": {
      "via": "Strada Ricci 55, Appartamento 58",
      "civico": "925",
      "cap": "65995",
      "localita": "Ivonne umbro",
      "comune": {
        "id": 1,
        "nome": "LASTRA A SIGNA",
        "provincia": {
          "id": 1,
          "nome": "FIRENZE",
          "sigla": "FI"
        }
      }
    },
    "dataInserimento": "2019-06-01T08:11:01.911+00:00",
    "dataUltimoContatto": "2021-03-24T21:32:06.375+00:00"
  }

  //COPIA dell Postman comune (lungo)

  constructor(
    private ClientiService: ClientiService, private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.ClientiService.getClientById(data['id']).subscribe(response => this.cliente = response);
    })
    //this.clienteService.addClient().subscribe(data =>
    //this.tipoCliente = data);
  }

  addClient(): void {
    this.ClientiService.addClient(this.cliente).subscribe(data => {

    })
    //this.route.navigate(['clienti'])
    //this.cliente = new Client();
  }
  aggiungi(cliente: Client) {
    this.ClientiService.aggiungiClient(this.cliente).subscribe(response => console.log(response));
    this.router.navigate(['clienti', cliente.id, 'newClient'])
  }
}
