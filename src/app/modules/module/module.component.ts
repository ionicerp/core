import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  currentModuleId: string = '';

  constructor(
    private privateActivatedRoute: ActivatedRoute
  ) {
    this.privateActivatedRoute.paramMap.subscribe((resp: ParamMap) => {
      this.currentModuleId = resp.get('module_id') ?? '';
    });
  }

  ngOnInit(): void {
  }

}
