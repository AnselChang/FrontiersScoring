import { DataFieldID, Field, FieldType, Mode } from "./abstract-field";

export class NumberField implements Field {

    type = FieldType.NUMBER;

    constructor(
      public mode: Mode,
      public id: DataFieldID,
      public label: string,
      public definition: string,
      private value: number,
      public readonly points: number,
      private min: number | null = null,
      private max: number | null = null,
    ) {}
  
    getValue(): number {
      return this.value;
    }

    setValue(value: number): void {
        if (this.max !== null) {
            value = Math.min(this.max, value);
        }
        if (this.min !== null) {
            value = Math.max(this.min, value);
        }
        this.value = value;
    }

    canIncrement(): boolean {
        return this.max === null || this.value < this.max;
    }

    canDecrement(): boolean {
        return this.min === null || this.value > this.min;
    }
    
    getScore(): number {
        return this.getValue() * this.points;
    }

  }