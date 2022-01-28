import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-clienti-detail',
  templateUrl: './clienti-detail.component.html',
  styleUrls: ['./clienti-detail.component.css']
})
export class ClientiDetailComponent implements OnInit {

  cliente: Client = new Client();  //obj vuoto
  constructor(
    private route: ActivatedRoute,
    private clientiService: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getClientById(params[('id')]).subscribe(client => this.cliente = client);
    });
  }
  modifica(cliente: Client) {
    'clienti/:id'
    this.router.navigate(['clienti', cliente.id, 'addClienti']);
  }
}
