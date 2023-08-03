import { DataFieldID, Field, FieldType, Mode } from "./abstract-field";

export class ToggleField implements Field {

  type = FieldType.NUMBER;
  
    constructor(
      public mode: Mode,
      public id: DataFieldID,
      public label: string,
      private value: boolean,
      public readonly score: number
    ) { }
  
    getValue(): boolean {
      return this.value;
    }

    setValue(value: boolean): void {
        this.value = value;
    }

    getScore(): number {
      return this.getValue() ? this.score : 0;
    }
  }