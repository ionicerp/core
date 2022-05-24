import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  currentEntityId: string = '';

  constructor(
    private privateActivatedRoute: ActivatedRoute
  ) {
    this.privateActivatedRoute.paramMap.subscribe((resp: ParamMap) => {
      this.currentEntityId = resp.get('entity_id') ?? '';
    });
  }

  ngOnInit(): void {
  }

}
