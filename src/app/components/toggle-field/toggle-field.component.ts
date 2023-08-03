import { Component, Input } from '@angular/core';
import { DataFieldID, DataService } from 'src/app/services/data.service';
import { ToggleField } from 'src/app/services/fields/toggle-field';

@Component({
  selector: 'app-toggle-field',
  templateUrl: './toggle-field.component.html',
  styleUrls: ['./toggle-field.component.css']
})
export class ToggleFieldComponent {
  @Input() field: DataFieldID = DataFieldID.NULL;

  private isHovering: boolean = false;

  constructor(private data: DataService) { }

  getField(): ToggleField {
    return this.data.getField(this.field) as ToggleField;
  }

  getColor(): string {
    if (this.getField().getValue()) {
      // green, on
      return this.isHovering ? "rgb(79, 220, 79, 0.8)" : "rgb(79, 220, 79)";
    } else {
      // red, off
      return this.isHovering ? "rgb(220, 79, 79, 0.9)" : "rgb(220, 79, 79)";
    }
  }

  getButtonText(): string {
    if (this.getField().getValue()) {
      return "ON";
    } else {
      return "OFF";
    }
  }

  toggle() {
    this.getField().setValue(!this.getField().getValue());
  }

  onMouseEnter() {
    this.isHovering = true;
  }

  onMouseLeave() {
    this.isHovering = false;
  }

}
