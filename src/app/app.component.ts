import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Mode } from './services/fields/abstract-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontiers';

  constructor(private data: DataService) {}

  getModeString(): string {
    return this.data.getMode() === Mode.AUTON ? "Auton" : "Teleop";
  }


}
