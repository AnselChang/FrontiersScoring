import { Injectable } from '@angular/core';
import { NumberField } from './fields/number-field';
import { ToggleField } from './fields/toggle-field';
import { DataFieldID, Field, Mode } from './fields/abstract-field';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // initialize with default values
  private _data: { [id in DataFieldID]?: Field } = {};

  private _currentMode: Mode = Mode.AUTON;

  private _score: { [key in Mode]: number} = {
    [Mode.AUTON]: 0,
    [Mode.TELEOP]: 0,
  }

  constructor() {
    this.initAutonFields();
    this.initTeleopFields();
    this.updateScore();
  }

  initAutonFields() {

    // Autonomous data fields
    this._data[DataFieldID.RED_AUTON] = new NumberField(
      Mode.AUTON, DataFieldID.RED_AUTON,
      "Red Balls", // label
      "(4 pts) On opponent side", // definition
      3, // start amount
      4, // points per value
      0, null
    ); // range

    this._data[DataFieldID.BLUE_AUTON] = new NumberField(
      Mode.AUTON, DataFieldID.BLUE_AUTON,
      "Blue Balls", // label
      "(4 pts) On opponent side", // definition
      3, // start amount
      4, // points per value
      0, null
    ); // range

    this._data[DataFieldID.YELLOW_AUTON] = new NumberField(
      Mode.AUTON, DataFieldID.YELLOW_AUTON,
      "Yellow Balls", // label
      "(4 pts) On this side", // definition
      0, // start amount
      4, // points per value
      0, null
    ); // range

    this._data[DataFieldID.UPPER_HOLE_BONUS_AUTON] = new NumberField(
      Mode.AUTON, DataFieldID.UPPER_HOLE_BONUS_AUTON,
      "Red Bonus", // label
      "(6 pts) Through red hole", // definition
      0, // start amount
      6, // points per value
      0, null
    ); // range

    this._data[DataFieldID.PARKING_AUTON] = new NumberField(
      Mode.AUTON, DataFieldID.PARKING_AUTON,
      "Parking", // label
      "(8 pts per robot)", // definition
      0, // start amount
      8, // points per value
      0, 2
    ); // range

    this._data[DataFieldID.PENALTY_AUTON] = new NumberField(
      Mode.AUTON, DataFieldID.PENALTY_AUTON,
      "Penalties", // label
      "(-8 pts per penalty)", // definition
      0, // start amount
      -8, // points per value
      0, null
    ); // range
  }

  initTeleopFields() {

    // Teleop data fields
    this._data[DataFieldID.RED_TELEOP] = new NumberField(
      Mode.TELEOP, DataFieldID.RED_TELEOP,
      "Red Balls", // label
      "(2 pt) On opponent side", // definition
      0, // start amount
      2, // points per value
      0, null // range
    );

    this._data[DataFieldID.BLUE_TELEOP] = new NumberField(
      Mode.TELEOP, DataFieldID.BLUE_TELEOP,
      "Blue Balls", // label
      "(2 pt) On opponent side", // definition
      0, // start amount
      2, // points per value
      0, null // range
    );

    this._data[DataFieldID.YELLOW_TELEOP] = new NumberField(
      Mode.TELEOP, DataFieldID.YELLOW_TELEOP,
      "Yellow Balls", // label
      "(10 pt) On this side", // definition
      0, // start amount
      10, // points per value
      0, null // range
    );

    this._data[DataFieldID.CROSS_CENTER_TELEOP] = new NumberField(
      Mode.TELEOP, DataFieldID.CROSS_CENTER_TELEOP,
      "Cross Center", // label
      "(4 pts per robot) during endgame", // definition
      0, // start amount
      4, // points per value
      0, 2 // range
    );

    this._data[DataFieldID.PARKING_TELEOP] = new NumberField(
      Mode.TELEOP, DataFieldID.PARKING_TELEOP,
      "Parking", // label
      "(4 pts per robot)", // definition
      0, // start amount
      4, // points per value
      0, 2 // range
    );

    this._data[DataFieldID.PENALTY_TELEOP] = new NumberField(
      Mode.TELEOP, DataFieldID.PENALTY_TELEOP,
      "Penalties", // label
      "(-8 pts per penalty)", // definition
      0, // start amount
      -8, // points per value
      0, null // range
    );
  }


  getScore(mode: Mode): number {
    return this._score[mode];
  }

  getTotalScore(): number {
    return this.getScore(Mode.AUTON) + this.getScore(Mode.TELEOP);
  }
  
  getAllFields(): Field[] {
    return Object.values(this._data);
  }

  getField(id: DataFieldID): Field {
    return this._data[id]!;
  }

  getFieldValue(id: DataFieldID): any {
    return this.getField(id).getValue();
  }

  setFieldValue(id: DataFieldID, value: any): void {
    this.getField(id).setValue(value);
    this.updateScore();
  }

  getMode(): Mode {
    return this._currentMode;
  }

  setMode(mode: Mode) {
    this._currentMode = mode;
  }

  updateScore(): void {

    this._score[Mode.AUTON] = 0;
    this._score[Mode.TELEOP] = 0;


    for (let field of this.getAllFields()) {
      this._score[field.mode] += field.getScore();
    }

  }


}
export { DataFieldID };

