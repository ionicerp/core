import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CurrentValueService } from 'src/app/services/current-value.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  currentEntityId: string = '';

  constructor(
    private privateActivatedRoute: ActivatedRoute,
    private privateCurrentValueService: CurrentValueService
  ) {
    this.privateActivatedRoute.paramMap.subscribe((resp: ParamMap) => {
      this.currentEntityId = resp.get('entity_id') ?? '';
      this.privateCurrentValueService.setEntityId(this.currentEntityId);
    });
  }

  ngOnInit(): void {
  }

}
