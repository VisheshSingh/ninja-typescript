// classes
export class Invoice {
  constructor(
    private client: string,
    public details: string,
    readonly amount: number
  ) {}

  format() {
    console.log(`${this.client} owes $${this.amount} for ${this.details}`);
  }
}
