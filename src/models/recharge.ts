export class Recharge {
    public smileNumber: string;
    public smileAccount: string;
    public amount: Number;

   

    constructor(smileNumber: string, smileAccount: string, amount: Number) {
        this.smileNumber = smileNumber;
        this.smileAccount = smileAccount;
        this.amount = amount;
    }
}
