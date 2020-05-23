import { HasFormatter } from '../interfaces/HasFormatter';

// classes
export class Invoice implements HasFormatter {
  constructor(
    private client: string,
    public details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
