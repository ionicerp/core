import { Component } from '@angular/core';
import { CurrentValueService } from './services/current-value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core';

  constructor(
    private privateCurrentValueService: CurrentValueService
  ) { }

  setOrganizationId(value: any) {
    this.privateCurrentValueService.setOrganizationId(value.target.value);
  }

  setBusinessUnitId(value: any) {
    this.privateCurrentValueService.setBusinessUnitId(value.target.value);
  }
}
