import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { CurrentValueService } from 'src/app/services/current-value.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit, OnDestroy {

  organizationId: string = '';
  businessUnitId: string = '';
  currentModuleId: string = '';
  currentEntityId: string = '';

  subscriptionState$: Subject<boolean> = new Subject();

  constructor(
    private privateActivatedRoute: ActivatedRoute,
    private privateCurrentValueService: CurrentValueService
  ) {
    this.privateActivatedRoute.paramMap.subscribe((resp: ParamMap) => {
      this.currentModuleId = resp.get('module_id') ?? '';
      this.privateCurrentValueService.setModuleId(this.currentModuleId);
    });
    this.privateCurrentValueService.currentValue$.pipe(takeUntil(this.subscriptionState$)).subscribe(resp => {
      this.organizationId = resp?.organizationId ?? '';
      this.businessUnitId = resp?.businessUnitId ?? '';
      this.currentEntityId = resp?.entityId ?? '';
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionState$.next(true);
    this.subscriptionState$.complete();
  }


}
