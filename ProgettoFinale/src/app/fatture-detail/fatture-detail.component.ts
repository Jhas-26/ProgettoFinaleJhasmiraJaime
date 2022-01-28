import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattur } from '../classes/fattur';
import { FattureService } from '../service/fatture.service';

@Component({
  selector: 'app-fatture-detail',
  templateUrl: './fatture-detail.component.html',
  styleUrls: ['./fatture-detail.component.css']
})
export class FattureDetailComponent implements OnInit {

  fatture: Fattur = new Fattur();
  constructor(
    private route: ActivatedRoute,
    private fattureService: FattureService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fattureService.getFattureById(params[('id')]).subscribe(response => this.fatture = response);
    });
  }

}
