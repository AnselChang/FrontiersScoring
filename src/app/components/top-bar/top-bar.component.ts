import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Mode } from 'src/app/services/fields/abstract-field';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(public data: DataService) {

  }

  get mode(): typeof Mode {
    return Mode;
  }

  getString(mode: Mode): string {
    if (mode === Mode.AUTON) return "Auton";
    else return "Teleop";
  }

  click(mode: Mode) {
    this.data.setMode(mode);
    console.log(mode);
  }

  getMode(): Mode {
    return this.data.getMode();
  }

  getScore(mode: Mode) {
    return this.data.getScore(mode);
  }

}
