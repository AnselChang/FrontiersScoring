import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-label-block',
  templateUrl: './field-label-block.component.html',
  styleUrls: ['./field-label-block.component.css']
})
export class FieldLabelBlockComponent {
  @Input() subtitle: string = '';

}
