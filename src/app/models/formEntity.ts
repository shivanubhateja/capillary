export class ItemModel {
  constructor(
    public description: string,
    public quantity: number,
    public rate: number,
    public amount: number
  ) {
    this.description = description;
    this.quantity = quantity;
    this.rate = rate;
    this.amount = amount;
   }
}
