export enum DataFieldID {
    NULL = "NULL",
    RED_AUTON = "RED_AUTON",
    BLUE_AUTON = "BLUE_AUTON",
    YELLOW_AUTON = "YELLOW_AUTON",
    UPPER_HOLE_BONUS_AUTON = "UPPER_HOLE_BONUS_AUTON",
    PARKING_AUTON = "PARKING_AUTON",
    PENALTY_AUTON = "PENALTY_AUTON",
    RED_TELEOP = "RED_TELEOP",
    BLUE_TELEOP = "BLUE_TELEOP",
    YELLOW_TELEOP = "YELLOW_TELEOP",
    CROSS_CENTER_TELEOP = "CROSS_CENTER_TELEOP",
    PARKING_TELEOP = "PARKING_TELEOP",
    PENALTY_TELEOP = "PENALTY_TELEOP",
}

export enum Mode {
  AUTON = "AUTON",
  TELEOP = "TELEOP",
}

export enum FieldType {
    NUMBER = "NUMBER",
    TOGGLE = "TOGGLE",
}
  
  export interface Field {
    readonly type: FieldType;
    readonly mode: Mode;
    readonly id: DataFieldID;
    readonly label: string;
    
    getValue(): any;
    setValue(value: any): void;

    getScore(): number;
  } 