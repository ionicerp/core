import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ICurrentValue } from '../interfaces/current-value.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentValueService {

  currentValue: ICurrentValue = {};
  private currentValueSubject = new Subject<ICurrentValue | undefined>();
  currentValue$ = this.currentValueSubject.asObservable();

  constructor() { }

  setOrganizationId(organizationId: string) {
    this.currentValue.organizationId = organizationId;
    this.publish();
  }

  setBusinessUnitId(businessUnitId: string) {
    this.currentValue.businessUnitId = businessUnitId;
    this.publish();
  }

  setModuleId(moduleId: string) {
    this.currentValue.moduleId = moduleId;
    this.publish();
  }

  setEntityId(entityId: string) {
    this.currentValue.entityId = entityId;
    this.publish();
  }

  publish() {
    this.currentValueSubject.next(this.currentValue);
  }
}
