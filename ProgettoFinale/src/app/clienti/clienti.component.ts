import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  cliente: Client[] = [];

  constructor(
    private clientiService: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data => this.cliente = data.content);
  }

  detail(id: number) {
    //clienti/:id
    //alert(id)
    this.router.navigate(['clienti', id])
  }
  addClient() {
    this.router.navigate(['/clienti/new'])
  }
  remove(item: Client) {
    this.clientiService.removeClient(item).subscribe(data => {
      this.cliente = this.cliente.filter(ele => ele !== item);
    })
  }
}
