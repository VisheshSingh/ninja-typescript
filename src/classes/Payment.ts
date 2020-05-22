import { HasFormatter } from './HasFormatter';

// classes
export class Payment implements HasFormatter {
  constructor(
    private recipient: string,
    public details: string,
    readonly amount: number
  ) {}

  format() {
    console.log(
      `${this.recipient} is owed $${this.amount} for ${this.details}`
    );
  }
}
