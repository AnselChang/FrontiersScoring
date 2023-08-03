import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-full-score',
  templateUrl: './full-score.component.html',
  styleUrls: ['./full-score.component.css']
})
export class FullScoreComponent {

  constructor(public data: DataService) { }

}
