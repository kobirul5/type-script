{
    // 

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number; // privet a convention a sob smy (_) diye lekha valo and protected korle child a _blanace paoa jabe noile paoa jai na
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        set deposit(amount: number){
            this._balance = this.balance + amount
        }

        // addDeposit(amount : number) {
        //     this._balance = this._balance + amount;
        // }

        // getter
        get balance() {
            return this._balance;
        }

        // getBalance(){
        //     return this._balance;
        // }

    }

    // class StudentsAccount extends BankAccount{
    //     test(){
    //         this.
    //     }
    // }


    const goribManusherAccount = new BankAccount(111, "abyl", 555);
    //goribManusherAccount.id = 4// akn change kora jasse but amn kora ucit na, ata amn vabe rakhte hobe jeno change na kora jai, tar jonno readoOnly kore dite hobe;

   //goribManusherAccount.blance = 9 // balance sora sori change kora jabe na  privet rakar jnno. akn ata kaj korbe na.
    // goribManusherAccount.addDeposit(4)

    
    goribManusherAccount.deposit = 20;
    const myBalance = goribManusherAccount.balance
    console.log("-------------",myBalance)

    // 
}