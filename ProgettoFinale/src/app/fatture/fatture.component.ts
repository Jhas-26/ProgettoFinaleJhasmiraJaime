import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattur } from '../classes/fattur';
import { FattureService } from '../service/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  fatture: Fattur[] = [];

  constructor(
    private fattureService: FattureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(data => this.fatture = data.content);
  }
  detail(id: number) {
    //fatture/:id
    //alert(id)
    this.router.navigate(['fatture', id])
  }
}
