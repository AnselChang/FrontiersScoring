import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataFieldID, FieldType, Mode } from 'src/app/services/fields/abstract-field';

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.css']
})
export class FieldsListComponent {

  constructor(public data: DataService) { }

  public get fieldID(): typeof DataFieldID {
    return DataFieldID;
  }

  get mode(): typeof Mode {
    return Mode;
  }

}
