import { Component, Input } from '@angular/core';
import { DataFieldID, DataService } from 'src/app/services/data.service';
import { NumberField } from 'src/app/services/fields/number-field';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css']
})
export class NumberFieldComponent {
  @Input() field: DataFieldID = DataFieldID.NULL;

  constructor(private data: DataService) { }

  getField(): NumberField {
    return this.data.getField(this.field) as NumberField;
  }

  increment(): void {
    console.log('increment')
    this.data.setFieldValue(this.field, this.getField().getValue() + 1);
  }

  decrement(): void {
    console.log('decrement')
    this.data.setFieldValue(this.field, this.getField().getValue() - 1);
  }

}
